---
name: "Department Planning Prompt"
department: "gpt6-astra-business-team"
description: "S01/M01/E01/F01 department planning — diagnose constraint, recommend ≤3 priorities with owners/measures"
install_url: "https://efficusai.co.uk/ai-resources"
tags: ["department-planning", "prioritization", "constraint-analysis"]
verified: true
added_date: "2026-09-27"
---

# Department Planning Prompt

**Use with S01 (Sales), M01 (Marketing), E01 (SEO), or F01 (Finance) to set department priorities.**

---

## Prompt

> **Act as [S01 / M01 / E01 / F01]. Use the current brief, baseline and capacity. Identify the department constraint most likely to prevent [goal]. Recommend a maximum of three priorities. For each, select the relevant role IDs, specify inputs and complete outputs, name the owner and define the success measure. Explain what to defer. Begin the highest priority task that has enough evidence. Keep plans, completed work and external actions clearly separate.**

---

## How It Works

| Input | Source |
|-------|--------|
| Current brief | Business brief (vX.Y) |
| Baseline | Business brief field 7 |
| Capacity | Business brief field 8 |
| Goal | Task brief "Decision or outcome" |

## Output Structure

```
Constraint: [The one bottleneck most likely to prevent the goal]

Priority 1:
  Roles: [e.g., S02, S03, S06]
  Inputs: [Specific data/files needed]
  Outputs: [Complete deliverables per role]
  Owner: [Person/function]
  Success: [Measurable criterion]

Priority 2: ...
Priority 3: ...

Deferred: [What to explicitly not do now]

Starting Task: [Highest priority with sufficient evidence]
```

---

## Role Mapping by Department

| Department | Planning Role | Specialist Roles |
|------------|---------------|------------------|
| **Sales** | S01 Head of Sales | S02–S20 |
| **Marketing** | M01 Head of Marketing | M02–M20 |
| **SEO** | E01 Head of SEO | E02–E20 |
| **Finance** | F01 Head of Finance | F02–F20 |

---

## Key Principles

- **Max 3 priorities** — focus beats breadth
- **Owner + measure** — accountability built in
- **Evidence gate** — don't start without inputs
- **Separate plans from execution** — clear boundary
- **A role title ≠ authority** — human owner decides

---

**Source:** GPT-6 Astra Business Team by EfficusAI (v1.0, Sept 2026)