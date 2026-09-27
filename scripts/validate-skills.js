#!/usr/bin/env node
/**
 * Growth Architect Store - Skill Validation Script
 * Validates all skill files for consistency and completeness
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const ROOT_DIR = path.join(__dirname, '..');
const DEPARTMENTS_DIR = path.join(ROOT_DIR, 'departments');
const TEMPLATES_DIR = path.join(ROOT_DIR, 'templates');

const VALID_DEPARTMENTS = [
  'developers',
  'designers',
  'marketing',
  'social-media',
  'finance',
  'small-business',
  'legal'
];

const REQUIRED_FIELDS = [
  'name',
  'department',
  'description',
  'install_url',
  'tags',
  'verified',
  'added_date'
];

let errors = 0;
let warnings = 0;
let skillsChecked = 0;

function logError(msg, file) {
  console.error(`❌ ERROR${file ? ` [${file}]` : ''}: ${msg}`);
  errors++;
}

function logWarning(msg, file) {
  console.warn(`⚠️  WARNING${file ? ` [${file}]` : ''}: ${msg}`);
  warnings++;
}

function logSuccess(msg) {
  console.log(`✅ ${msg}`);
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  try {
    const yaml = match[1];
    const obj = {};
    yaml.split('\n').forEach(line => {
      const colonIdx = line.indexOf(':');
      if (colonIdx > 0) {
        const key = line.substring(0, colonIdx).trim();
        let value = line.substring(colonIdx + 1).trim();
        // Remove quotes
        value = value.replace(/^["']|["']$/g, '');
        // Parse arrays
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map(v => v.trim().replace(/^["']|["']$/g, ''));
        }
        // Parse booleans
        if (value === 'true') value = true;
        if (value === 'false') value = false;
        obj[key] = value;
      }
    });
    return obj;
  } catch (e) {
    return null;
  }
}

function validateUrl(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.request(url, { method: 'HEAD', timeout: 5000 }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 400);
    });
    req.on('error', () => resolve(false));
    req.on('timeout', () => { req.destroy(); resolve(false); });
    req.end();
  });
}

function validateTags(tags, file) {
  if (!Array.isArray(tags)) {
    logError('tags must be an array', file);
    return false;
  }
  let valid = true;
  tags.forEach(tag => {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(tag)) {
      logError(`Tag "${tag}" must be lowercase kebab-case`, file);
      valid = false;
    }
  });
  return valid;
}

function validateDate(date, file) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    logError(`added_date "${date}" must be YYYY-MM-DD`, file);
    return false;
  }
  const d = new Date(date);
  if (isNaN(d.getTime())) {
    logError(`added_date "${date}" is not a valid date`, file);
    return false;
  }
  return true;
}

async function validateSkillFile(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fm = parseFrontmatter(content);

  if (!fm) {
    logError('Missing or invalid frontmatter', relativePath);
    return false;
  }

  let valid = true;

  // Required fields
  REQUIRED_FIELDS.forEach(field => {
    if (!(field in fm) || fm[field] === '' || fm[field] === null) {
      logError(`Missing required field: ${field}`, relativePath);
      valid = false;
    }
  });

  if (!valid) return false;

  // Department validation
  if (!VALID_DEPARTMENTS.includes(fm.department)) {
    logError(`Invalid department: "${fm.department}". Must be one of: ${VALID_DEPARTMENTS.join(', ')}`, relativePath);
    valid = false;
  }

  // Tags validation
  if (!validateTags(fm.tags, relativePath)) valid = false;

  // Date validation
  if (!validateDate(fm.added_date, relativePath)) valid = false;

  // URL validation
  if (fm.install_url && !fm.install_url.startsWith('http')) {
    logError(`install_url must be a full HTTP/HTTPS URL`, relativePath);
    valid = false;
  }

  // Description length
  if (fm.description && fm.description.length > 160) {
    logWarning(`Description exceeds 160 chars (${fm.description.length})`, relativePath);
  }

  // Verify URL reachable (async)
  if (fm.install_url) {
    const reachable = await validateUrl(fm.install_url);
    if (!reachable) {
      logWarning(`Install URL may be unreachable: ${fm.install_url}`, relativePath);
    }
  }

  skillsChecked++;
  return valid;
}

async function validateDepartmentReadme(deptPath, deptName) {
  const readmePath = path.join(deptPath, 'README.md');
  if (!fs.existsSync(readmePath)) {
    logWarning(`Missing README.md`, deptName);
    return;
  }

  const content = fs.readFileSync(readmePath, 'utf8');
  const skillsDir = path.join(deptPath, 'skills');

  if (!fs.existsSync(skillsDir)) return;

  const skillFiles = fs.readdirSync(skillsDir).filter(f => f.endsWith('.md'));

  // Check each skill has a row in the table
  skillFiles.forEach(skillFile => {
    const skillName = skillFile.replace('.md', '');
    const skillPath = path.join(skillsDir, skillFile);
    const skillContent = fs.readFileSync(skillPath, 'utf8');
    const fm = parseFrontmatter(skillContent);

    if (fm && fm.name) {
      // Check if linked in README
      const linkPattern = new RegExp(`\\[${fm.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\]\\(skills/${skillName}\\.md\\)`);
      if (!linkPattern.test(content)) {
        logWarning(`Skill "${fm.name}" not linked in department README`, deptName);
      }
    }
  });
}

async function main() {
  console.log('🔍 Validating Growth Architect Store skills...\n');

  // Check departments exist
  if (!fs.existsSync(DEPARTMENTS_DIR)) {
    logError('departments/ directory not found');
    process.exit(1);
  }

  const departments = fs.readdirSync(DEPARTMENTS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

  // Validate each department
  for (const dept of departments) {
    const deptPath = path.join(DEPARTMENTS_DIR, dept);
    const skillsDir = path.join(deptPath, 'skills');

    if (!VALID_DEPARTMENTS.includes(dept)) {
      logWarning(`Unknown department folder: ${dept}`, dept);
    }

    if (!fs.existsSync(skillsDir)) {
      logWarning(`Missing skills/ directory`, dept);
      continue;
    }

    const skillFiles = fs.readdirSync(skillsDir).filter(f => f.endsWith('.md'));

    if (skillFiles.length === 0) {
      logWarning(`No skills found`, dept);
    }

    // Validate each skill file
    for (const skillFile of skillFiles) {
      const skillPath = path.join(skillsDir, skillFile);
      await validateSkillFile(skillPath, `${dept}/${skillFile}`);
    }

    // Validate department README
    await validateDepartmentReadme(deptPath, dept);
  }

  // Check for duplicate skill names within departments
  console.log('\n🔎 Checking for duplicates...');
  for (const dept of departments) {
    const skillsDir = path.join(DEPARTMENTS_DIR, dept, 'skills');
    if (!fs.existsSync(skillsDir)) continue;

    const names = new Map();
    const skillFiles = fs.readdirSync(skillsDir).filter(f => f.endsWith('.md'));

    for (const skillFile of skillFiles) {
      const skillPath = path.join(skillsDir, skillFile);
      const content = fs.readFileSync(skillPath, 'utf8');
      const fm = parseFrontmatter(content);
      if (fm && fm.name) {
        const key = fm.name.toLowerCase();
        if (names.has(key)) {
          logError(`Duplicate skill name "${fm.name}" in ${dept} (also in ${names.get(key)})`, dept);
        } else {
          names.set(key, skillFile);
        }
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log(`📊 Validation Summary`);
  console.log('='.repeat(50));
  console.log(`Skills checked: ${skillsChecked}`);
  console.log(`Errors: ${errors}`);
  console.log(`Warnings: ${warnings}`);

  if (errors > 0) {
    console.log('\n❌ Validation FAILED - fix errors before committing');
    process.exit(1);
  } else if (warnings > 0) {
    console.log('\n⚠️  Validation PASSED with warnings');
    process.exit(0);
  } else {
    console.log('\n✅ Validation PASSED - all clean!');
    process.exit(0);
  }
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});