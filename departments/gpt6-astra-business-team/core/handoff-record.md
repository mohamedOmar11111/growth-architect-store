---
name: "Handoff Record Template"
department: "gpt6-astra-business-team"
description: "8-field handoff record — preserves evidence, assumptions, decisions for next role"
install_url: "https://efficusai.co.uk/ai-resources"
tags: ["handoff", "template", "record", "context-transfer"]
verified: true
added_date: "2026-09-27"
---

# Handoff Record Template

**Pass only a summary can lose important caveats. Include the evidence needed to verify the next decision and identify estimates that must not be turned into facts.**

---

## Fields

| # | Field | Description |
|---|-------|-------------|
| 1 | **Task ID** | [Unique identifier for this task] |
| 2 | **Sending role and receiving role** | [e.g., S03 → S04] |
| 3 | **Approved output and version** | [File path or exact text + version] |
| 4 | **Source references** | [IDs or links to source documents] |
| 5 | **Facts the next role may rely on** | [List of verified facts with sources] |
| 6 | **Assumptions and unresolved items** | [Labelled assumptions + open questions] |
| 7 | **Decision required and owner** | [Specific decision + person/function] |
| 8 | **Next action and deadline** | [Concrete action + date] |

---

## Example

```
Task ID: T-2026-09-27-001
Sending role: S03 Account Researcher
Receiving role: S04 Buying Committee Mapper

Approved output: accounts/acme-corp-brief-v1.2.md

Source references:
- CRM export: deals-2026-Q3.csv (records 104, 112, 119)
- Website: acmecorp.com/about (accessed 2026-09-25)
- 10-K filing: SEC EDGAR 0001234567-26-000123

Facts next role may rely on:
- Acme Corp has 340 employees (10-K, p.12)
- Uses Salesforce + HubSpot (website, tech stack page)
- CTO hired Jan 2026 (LinkedIn, verified)
- Current CRM contract renews March 2027 (deal 119)

Assumptions and unresolved items:
- Budget authority: unclear if CTO or CFO owns (assumption: CTO influences, CFO decides)
- Competitive incumbent: likely Salesforce (hypothesis, not verified)
- Implementation readiness: no dedicated ops hire yet (gap)

Decision required: Confirm budget owner before S10 discovery prep
Owner: S04 Buying Committee Mapper

Next action: Map stakeholder roles for Acme Corp opportunity
Deadline: 2026-09-29
```

---

## Handoff Principles

1. **Preserve caveats** — Don't turn estimates into facts
2. **Traceable sources** — Every fact links to evidence
3. **Explicit assumptions** — Label what's not known
4. **Actionable next step** — Next role knows exactly what to do
5. **Versioned** — Brief version included so assumptions align

---

**Source:** GPT-6 Astra Business Team by EfficusAI (v1.0, Sept 2026)