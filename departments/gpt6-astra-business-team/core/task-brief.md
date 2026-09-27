---
name: "Task Brief Template"
department: "gpt6-astra-business-team"
description: "11-field task brief — defines the specific job for a role (paired with role prompt)"
install_url: "https://efficusai.co.uk/ai-resources"
tags: ["task-brief", "template", "job-definition", "scope"]
verified: true
added_date: "2026-09-27"
---

# Task Brief Template

**The role prompt defines the speciality. The task brief defines the specific job. Fill in both so the model knows what a complete result looks like.**

---

## Fields

| # | Field | Description | Example |
|---|-------|-------------|---------|
| 1 | **Task ID and date** | Unique identifier | `T-2026-09-27-001` |
| 2 | **Role** | Code and name | `S08 Sales Email Copywriter` |
| 3 | **Decision or outcome** | What this work must enable | `Qualified meeting booked with Acme Corp CTO` |
| 4 | **Inputs** | Files, data, links, approved handoffs | `S03 account brief, S04 stakeholder map, approved offer v2.1` |
| 5 | **Scope** | Audience, market, time period, exclusions | `Acme Corp, North America, Q4 2026, exclude EMEA` |
| 6 | **Required output** | Format, length, fields, complete asset | `3 email variants (≤100 words each), subject lines, evidence check` |
| 7 | **Success criteria** | What must be true when done | `Every claim traceable; one low-friction question per email; no fabricated proof` |
| 8 | **Constraints** | Capacity, budget, permissions, deadline | `Send by 2026-09-29; sender: Jane Doe; voice: direct, no fluff` |
| 9 | **Decision owner** | Name or function | `Jane Doe, Head of Sales` |
| 10 | **Next recipient** | Role or owner | `S07 Outbound Campaign Planner` |
| 11 | **Business brief version** | Version | `v1.3 (2026-09-25)` |

---

## Usage

1. **Role prompt** = the speciality (e.g., "Act as our Sales Email Copywriter...")
2. **Task brief** = the specific job (this template filled in)
3. **Combine both** in the conversation with shared instructions + business brief

---

## Example: S08 Sales Email Copywriter

```
Task ID and date: T-2026-09-27-001
Role: S08 Sales Email Copywriter
Decision or outcome: Qualified meeting booked with Acme Corp CTO
Inputs: S03 Acme account brief v1.2, S04 stakeholder map v1.0, approved offer v2.1, sender voice guide
Scope: Acme Corp, CTO persona, North America, Q4 2026, exclude procurement-only contacts
Required output: 3 first-email variants (≤100 words), 2 follow-ups each, subject lines, evidence check table
Success criteria: Every personalisation fact sourced; plausible business issue; one low-friction question; no invented familiarity/fabricated proof/false urgency
Constraints: Send by 2026-09-29; sender Jane Doe; voice: direct, specific, no fluff; max 3 emails total
Decision owner: Jane Doe, Head of Sales
Next recipient: S07 Outbound Campaign Planner (for sequence integration)
Business brief version: v1.3 (2026-09-25)
```

---

**Source:** GPT-6 Astra Business Team by EfficusAI (v1.0, Sept 2026)