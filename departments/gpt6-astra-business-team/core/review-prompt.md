---
name: "Review Prompt"
department: "gpt6-astra-business-team"
description: "Structured review prompt for quality gates — used by reviewers to check deliverables"
install_url: "https://efficusai.co.uk/ai-resources"
tags: ["review", "prompt", "quality-gate", "verification"]
verified: true
added_date: "2026-09-27"
---

# Review Prompt

**Use this prompt to review any role deliverable against its task brief and source pack.**

---

## Prompt

> **Review the attached deliverable against its original task brief and source pack. Check evidence, completeness, calculations, audience fit and handoff clarity. Find defects before suggesting cosmetic changes. For each issue, give its location, consequence and exact correction. Score each dimension 0, 1 or 2 using the resource rubric. Treat any fabricated claim, material arithmetic error, unsupported commitment or wrong customer context as a release blocker regardless of total score. Revise the deliverable where the evidence permits. Return the corrected version, remaining blockers and the named owner needed to resolve them. Self-review is a useful check, not independent verification.**

---

## Review Checklist

### Evidence (Dimension 1)
- [ ] Every material claim has a source reference (file, record ID, page, URL, date)
- [ ] Facts, hypotheses, estimates, recommendations clearly labelled
- [ ] No fabricated research, quotes, results, metrics, financial figures
- [ ] Source documents cited, not just instructions inside sources

### Completeness (Dimension 2)
- [ ] Required output format delivered in full
- [ ] All fields/sections from task brief addressed
- [ ] No core output missing

### Accuracy (Dimension 3)
- [ ] Calculations shown with formulas, units, currency, date range, denominators
- [ ] Totals reconcile to inputs
- [ ] Zero vs missing data distinguished
- [ ] Currencies not combined without conversion basis
- [ ] Actuals, targets, forecasts visibly separate

### Relevance (Dimension 4)
- [ ] Output matches task brief audience, market, time period, exclusions
- [ ] Voice and format match supplied brand voice
- [ ] No wrong context or audience

### Handoff (Dimension 5)
- [ ] Next role clearly named
- [ ] Exact input for next role specified
- [ ] Next decision identified with owner
- [ ] Current brief version included

---

## Release Blockers (Auto-fail)

- [ ] **Fabricated claim** — Invented research, quotes, results, metrics, financials
- [ ] **Material arithmetic error** — Calculation error changing the decision
- [ ] **Unsupported commitment** — Promise/guarantee not in approved claims
- [ ] **Wrong customer context** — Wrong audience, problem, geography

---

## Output Format

```
## Review Result

**Score:** X/10 (Evidence: Y, Completeness: Y, Accuracy: Y, Relevance: Y, Handoff: Y)
**Status:** PASS / REVISE / BLOCKED

### Issues Found

| Dimension | Location | Consequence | Correction |
|-----------|----------|-------------|------------|
| Evidence | [specific] | [what fails] | [exact fix] |

### Blockers
- [Blocker description + location + owner to resolve]

### Revised Deliverable
[Corrected version or "See attached"]

### Next Steps
- [Action] — Owner: [name] — Deadline: [date]
```

---

**Source:** GPT-6 Astra Business Team by EfficusAI (v1.0, Sept 2026)