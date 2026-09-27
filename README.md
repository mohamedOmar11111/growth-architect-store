# Growth Architect Store 🏪

> **Your AI Team Directory** — 122+ Claude Skills, 7 Departments, Zero Salaries

A curated, installable directory of Claude skills organized by business function. Every skill is verified, linked to its official source, and ready to deploy.

---

## 📦 Quick Start

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/growth-architect-store.git
cd growth-architect-store

# Browse departments
ls departments/
```

---

## 🏢 Departments

| # | Department | Skills | Status | Link |
|---|------------|--------|--------|------|
| 1 | **Developers** | 6 | ✅ Active | [`departments/developers/`](departments/developers/) |
| 2 | **Designers** | 6 | ✅ Active | [`departments/designers/`](departments/designers/) |
| 3 | **Marketing** | 45 | ✅ Active | [`departments/marketing/`](departments/marketing/) |
| 4 | **Social Media** | 17 | ✅ Active | [`departments/social-media/`](departments/social-media/) |
| 5 | **Finance** | 8 | ✅ Active | [`departments/finance/`](departments/finance/) |
| 6 | **Small Business** | 31 | ✅ Active | [`departments/small-business/`](departments/small-business/) |
| 7 | **Legal** | 9 | ✅ Active | [`departments/legal/`](departments/legal/) |

**Total: 122+ skills**

---

## 🗂️ Repository Structure

```
growth-architect-store/
├── README.md                 # This file
├── CONTRIBUTING.md           # How to add skills
├── departments/              # One folder per department
│   ├── developers/
│   │   ├── README.md         # Department overview
│   │   └── skills/           # One .md file per skill
│   │       ├── superpowers.md
│   │       ├── context7.md
│   │       └── ...
│   ├── designers/
│   ├── marketing/
│   ├── social-media/
│   ├── finance/
│   ├── small-business/
│   └── legal/
├── templates/
│   └── skill-template.md     # Template for new skills
└── scripts/
    └── validate-skills.js    # Validation script
```

---

## ➕ Adding a New Skill

### 1. Pick the right department
```
departments/{department-name}/skills/
```

### 2. Use the template
Copy `templates/skill-template.md` → `departments/{dept}/skills/{skill-name}.md`

### 3. Fill in required fields
```markdown
---
name: "Skill Name"
department: "developers|designers|marketing|social-media|finance|small-business|legal"
description: "One-line what it does"
install_url: "https://github.com/... or https://claude.com/plugins/..."
tags: ["tag1", "tag2"]
verified: true
added_date: "YYYY-MM-DD"
---

# Skill Name

**What it does:** Detailed description...

**Install:** [Link](install_url)

**Best for:** Use cases...

**Source:** Original repo/page
```

### 4. Update department README
Add the skill to the department's skills table.

### 5. Run validation
```bash
node scripts/validate-skills.js
```

### 6. Submit PR

---

## ✅ Skill Criteria

| Requirement | Details |
|-------------|---------|
| **Installable** | Must be one-click or one-command install |
| **Verified** | Link points to official source (GitHub, Claude plugins, etc.) |
| **Active** | Maintained within last 6 months |
| **Documented** | Has clear description and use cases |
| **Unique** | Not a duplicate of existing skill |

---

## 🔍 Finding Skills to Add

- **Official:** [github.com/anthropics/skills](https://github.com/anthropics/skills)
- **Community:** Search GitHub for `claude-skill` or `claude skills`
- **Marketplace:** [claude.com/plugins](https://claude.com/plugins)
- **Directories:** Awesome lists, Reddit r/ClaudeAI, Discord communities

---

## 📋 Validation Rules

The `validate-skills.js` script checks:
- [ ] All required frontmatter fields present
- [ ] Install URL is valid and reachable
- [ ] No duplicate skill names in same department
- [ ] Department folder exists
- [ ] Tags are lowercase, kebab-case

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

**TL;DR:**
1. Fork → Branch → Add skill → PR
2. One skill per PR (easier review)
3. Use the template
4. Verify the install link works

---

## 📄 License

MIT — Free to use, modify, distribute.

---

## 🙏 Credits

**Original Directory:** [Adrees AI Automation](https://adreesai.gumroad.com/l/duplicate_Yourself) — "Build Your Team with AI: 122 Claude Skills, 7 Departments, Zero Salaries"

**Maintained by:** Growth Architect HQ