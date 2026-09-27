---
name: "Review Rubric"
department: "gpt6-astra-business-team"
description: "5-dimension × 0-2 scoring rubric with release blockers — used for all role outputs"
install_url: "https://efficusai.co.uk/ai-resources"
tags: ["review", "rubric", "quality-gate", "scoring"]
verified: true
added_date: "2026-09-27"
---

# Review Rubric

**Review against the task, not against how polished the answer sounds. Use the same rubric across roles, adding the specialist acceptance check printed on each card.**

---

## Scoring Dimensions (0–2 each)

| Dimension | 0 — Fail | 1 — Partial | 2 — Pass |
|-----------|----------|-------------|----------|
| **Evidence** | Material claims unsupported | Some gaps remain | Material claims traceable |
| **Completeness** | Core output missing | Useful but unfinished | Required output complete |
| **Accuracy** | Material errors | Minor corrections needed | Checked and consistent |
| **Relevance** | Wrong context or audience | Partly tailored | Fits the actual task |
| **Handoff** | No usable next step | Owner or input unclear | Owner, input and decision clear |

---

## Scoring

- **Max score:** 10/10
- **Suggested pass threshold:** ≥8/10 **with no release blocker**
- **This is a working review rule, not a validated performance benchmark**

---

## Release Blockers (Auto-fail regardless of score)

Any of the following blocks release immediately:

1. **Fabricated claim** — Invented research, customer quotes, results, metrics, financial figures
2. **Material arithmetic error** — Wrong calculation that changes the decision
3. **Unsupported commitment** — Promise or guarantee not in approved claims
4. **Wrong customer context** — Output addresses wrong audience, problem, or geography

---

## Usage

1. Score each dimension 0, 1, or 2
2. Check for release blockers
3. If blocker exists → **Fail**, return specific location + correction
4. If score < 8 → **Revise**, return dimension-by-dimension feedback
5. If score ≥ 8 and no blockers → **Pass**, approve for handoff

---

## Review Prompt (for reviewers)

> **Review the attached deliverable against its original task brief and source pack. Check evidence, completeness, calculations, audience fit and handoff clarity. Find defects before suggesting cosmetic changes. For each issue, give its location, consequence and exact correction. Score each dimension 0, 1 or 2 using the resource rubric. Treat any fabricated claim, material arithmetic error, unsupported commitment or wrong customer context as a release blocker regardless of total score. Revise the deliverable where the evidence permits. Return the corrected version, remaining blockers and the named owner needed to resolve them. Self-review is a useful check, not independent verification.**

---

**Source:** GPT-6 Astra Business Team by EfficusAI (v1.0, Sept 2026)