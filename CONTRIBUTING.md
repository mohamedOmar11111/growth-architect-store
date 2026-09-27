# Contributing to Growth Architect Store

Thank you for adding to the directory! This guide ensures consistency and quality.

---

## 🎯 Before You Start

**Check if the skill already exists:**
```bash
# Search by name
grep -r "skill-name" departments/

# Search by install URL
grep -r "github.com/owner/repo" departments/
```

**Verify the skill meets criteria:**
- ✅ Installable in one click/command
- ✅ Official source (GitHub, claude.com/plugins, verified author)
- ✅ Active maintenance (commits/releases within 6 months)
- ✅ Clear documentation
- ✅ Not a duplicate

---

## 📝 Step-by-Step: Adding a Skill

### 1. Create a branch
```bash
git checkout -b add-skill-name-department
```

### 2. Copy the template
```bash
cp templates/skill-template.md departments/{department}/skills/{skill-name}.md
```

### 3. Fill in the frontmatter (REQUIRED)

```yaml
---
name: "Exact Skill Name"
department: "developers|designers|marketing|social-media|finance|small-business|legal"
description: "One sentence: what problem it solves"
install_url: "https://github.com/owner/repo"
tags: ["tag1", "tag2", "tag3"]
verified: true
added_date: "2026-09-26"
---
```

**Field Rules:**
| Field | Format | Example |
|-------|--------|---------|
| `name` | Title Case | `"Superpowers"` |
| `department` | Exact match from list | `"developers"` |
| `description` | ≤ 160 chars | `"Battle-tested engineering workflows..."` |
| `install_url` | Full HTTPS URL | `"https://github.com/obra/superpowers"` |
| `tags` | lowercase, kebab-case | `["tdd", "debugging", "planning"]` |
| `verified` | `true` or `false` | `true` |
| `added_date` | YYYY-MM-DD | `"2026-09-26"` |

### 4. Write the skill body

```markdown
# Skill Name

**What it does:** 2-3 sentences describing the capability and outcome.

**Install:** [Link](install_url)

**Best for:**
- Use case 1
- Use case 2
- Use case 3

**Source:** [Original repo/page](install_url)
```

### 5. Update department README

Open `departments/{department}/README.md` and add a row to the skills table:

```markdown
| Skill Name | Description | Install |
|------------|-------------|---------|
| [Skill Name](skills/skill-name.md) | Short description | [Install](install_url) |
```

### 6. Validate locally
```bash
node scripts/validate-skills.js
```
Fix any errors before committing.

### 7. Commit and push
```bash
git add departments/{department}/skills/{skill-name}.md departments/{department}/README.md
git commit -m "feat: add {skill-name} to {department}"
git push origin add-skill-name-department
```

### 8. Open a Pull Request

**PR Title:** `feat: add {Skill Name} to {Department}`

**PR Description:**
- What the skill does
- Install URL (clickable)
- Why it belongs in this department
- Any testing you did

---

## 🏷️ Tag Guidelines

Use existing tags when possible. Common tags:

| Category | Tags |
|----------|------|
| **Workflow** | `planning`, `tdd`, `debugging`, `brainstorming`, `memory` |
| **Integration** | `mcp`, `api`, `github`, `notion`, `slack` |
| **Output** | `code`, `design`, `copy`, `video`, `docs`, `data` |
| **Platform** | `web`, `mobile`, `cli`, `api` |
| **Domain** | `seo`, `ads`, `email`, `social`, `legal`, `finance` |

**New tags:** lowercase, kebab-case, singular (`seo` not `seos`)

---

## 🏢 Adding a New Department

**Only if:** You have 5+ skills that don't fit existing departments.

### Process:
1. Open an **Issue** first: "Proposal: New Department — {Name}"
2. Discuss with maintainers
3. If approved:
   ```bash
   mkdir -p departments/{new-department}/skills
   cp templates/department-readme-template.md departments/{new-department}/README.md
   ```
3. Add skills following normal process
4. Update root `README.md` department table

---

## 🔍 Validation Script

Run before every PR:
```bash
node scripts/validate-skills.js
```

**Exit codes:**
- `0` = All good
- `1` = Errors found (check output)

**Common errors:**
| Error | Fix |
|-------|-----|
| `Missing frontmatter field: X` | Add field to skill file |
| `Invalid department: X` | Use exact department name |
| `Install URL unreachable` | Verify URL works in browser |
| `Duplicate skill name` | Check existing skills in department |
| `Tags not kebab-case` | Use `my-tag` not `My Tag` |

---

## 📋 PR Checklist

- [ ] Skill meets all criteria (installable, verified, active, documented, unique)
- [ ] Frontmatter complete and valid
- [ ] Skill file uses template structure
- [ ] Department README updated with new row
- [ ] `validate-skills.js` passes
- [ ] One skill per PR
- [ ] PR title follows format: `feat: add {Skill Name} to {Department}`

---

## ❓ Questions?

Open a [Discussion](https://github.com/YOUR_USERNAME/growth-architect-store/discussions) or [Issue](https://github.com/YOUR_USERNAME/growth-architect-store/issues).

---

## 📜 Code of Conduct

Be respectful. No spam. No promotional skills without disclosure. Maintainers reserve the right to reject skills that don't meet quality bar.