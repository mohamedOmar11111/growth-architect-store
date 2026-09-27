# GPT-6 Astra Business Team

> **Business Operating Resource** — 80 roles across 4 departments (Sales, Marketing, SEO, Finance). 240 starter commands, 8 workflows, 12 templates, 2 worked examples. Built for GPT-6 Astra.

**Source:** EfficusAI | **Version:** 1.0, September 2026 | **Status:** ✅ Partial (40/80 roles captured)

---

## Resource Overview

| Component | Count | Status |
|-----------|-------|--------|
| **Sales Roles** | S01–S20 | ✅ 20/20 captured |
| **Marketing Roles** | M01–M20 | ✅ 20/20 captured |
| **SEO Roles** | E01–E20 | ⏳ 0/20 (requires full license) |
| **Finance Roles** | F01–F20 | ⏳ 0/20 (requires full license) |
| **Core OS** | Brief, Coordinator, Rubric, Handoffs | ✅ Complete |
| **Workflows** | 8 cross-department recipes | ⏳ Referenced only |
| **Templates** | 12 reusable templates | ⏳ Referenced only |
| **Worked Examples** | 2 end-to-end cases | ⏳ Referenced only |

> **Note:** This resource was extracted from a Notion page. SEO, Finance, workflows, templates, and examples require the full licensed version from EfficusAI.

---

## Core Operating System

| File | Description |
|------|-------------|
| [`core/business-brief.md`](core/business-brief.md) | 18-field shared context template (complete once, maintain always) |
| [`core/shared-instructions.md`](core/shared-instructions.md) | 8 operating principles for all roles |
| [`core/coordinator-prompt.md`](core/coordinator-prompt.md) | Task coordinator: selects role sequence, stages, dependencies |
| [`core/dept-planning-prompt.md`](core/dept-planning-prompt.md) | S01/M01/E01/F01 department planning prompt |
| [`core/review-rubric.md`](core/review-rubric.md) | 5-dimension × 0-2 scoring + release blockers |
| [`core/review-prompt.md`](core/review-prompt.md) | Structured review prompt for quality gates |
| [`core/handoff-record.md`](core/handoff-record.md) | 8-field handoff record template |
| [`core/task-brief.md`](core/task-brief.md) | 11-field task brief template |

---

## Sales Department (S01–S20)

| Role | Speciality | Key Handoffs |
|------|------------|--------------|
| [`S01 Head of Sales`](skills/s01-head-of-sales.md) | Revenue goal → sales plan | S07, S17, F10 |
| [`S02 ICP Analyst`](skills/s02-icp-analyst.md) | Profitable customer fit | S03, S06, M03 |
| [`S03 Account Researcher`](skills/s03-account-researcher.md) | Concise account briefs | S04, S05, S08 |
| [`S04 Buying Committee Mapper`](skills/s04-buying-committee-mapper.md) | Purchase influencers & gaps | S10, S13, S15 |
| [`S05 Buying Signal Analyst`](skills/s05-buying-signal-analyst.md) | Useful contact reasons | S06, S07 |
| [`S06 Lead Qualification`](skills/s06-lead-qualification.md) | Route by fit/readiness | S10, M09 |
| [`S07 Outbound Campaign Planner`](skills/s07-outbound-campaign-planner.md) | Focused outreach + learning | S08, S09, M20 |
| [`S08 Sales Email Copywriter`](skills/s08-sales-email-copywriter.md) | Relevant emails + personalization | S07, sender |
| [`S09 LinkedIn Outreach`](skills/s09-linkedin-outreach.md) | LI interactions → conversations | S06, M10 |
| [`S10 Discovery Call Planner`](skills/s10-discovery-call-planner.md) | Test fit + next step | S06, S11, S14 |
| [`S11 Demo Planner`](skills/s11-demo-planner.md) | Demo around buyer outcomes | S12, S13, product |
| [`S12 Objection Researcher`](skills/s12-objection-researcher.md) | Evidence-based responses | S18, M03, S15 |
| [`S13 Proposal Writer`](skills/s13-proposal-writer.md) | Agreed need → commercial proposal | F12, S15 |
| [`S14 Buyer Business Case`](skills/s14-buyer-business-case.md) | Transparent value estimate | S13, F12 |
| [`S15 Negotiation Planner`](skills/s15-negotiation-planner.md) | Commercial choices preserving fit | F12, F06, S13 |
| [`S16 Sales Follow Up`](skills/s16-sales-follow-up.md) | Keep opportunity moving | S17, S12 |
| [`S17 Pipeline Analyst`](skills/s17-pipeline-analyst.md) | Quality + forecast uncertainty | S01, S16, F10 |
| [`S18 Sales Coach`](skills/s18-sales-coach.md) | Transcript → coaching | S12, M03 |
| [`S19 Account Expansion`](skills/s19-account-expansion.md) | Expansion from value/readiness | S10, S13, F13 |
| [`S20 Win Loss Analyst`](skills/s20-win-loss-analyst.md) | Deal outcomes → better qualification | S01, S02, M03, M04 |

---

## Marketing Department (M01–M20)

| Role | Speciality | Key Handoffs |
|------|------------|--------------|
| [`M01 Head of Marketing`](skills/m01-head-of-marketing.md) | Priorities → commercial goals | M05, M20, F07 |
| [`M02 Customer Researcher`](skills/m02-customer-researcher.md) | Language/problems/criteria from evidence | M03, M04, M06, S02 |
| [`M03 Positioning Strategist`](skills/m03-positioning-strategist.md) | Offer understandable & distinct | M07, M11, S08, S12 |
| [`M04 Offer Designer`](skills/m04-offer-designer.md) | Package outcome + realistic economics | F12, M03, M05 |
| [`M05 Campaign Manager`](skills/m05-campaign-manager.md) | Brief → measurement | M07–M16, M20, S06 |
| [`M06 Content Strategist`](skills/m06-content-strategist.md) | Plan around audience needs | M07, M08, M14, E04 |
| [`M07 Marketing Copywriter`](skills/m07-marketing-copywriter.md) | Clear copy with accurate promise | M05, brand reviewer |
| [`M08 Social Content Producer`](skills/m08-social-content-producer.md) | Platform-native value posts | M13, M15, M19 |
| [`M09 Email Lifecycle Planner`](skills/m09-email-lifecycle-planner.md) | Sequences around actions | M20, S06 |
| [`M10 Lead Magnet Architect`](skills/m10-lead-magnet-architect.md) | Resource solving real problem | M07, M13, M08, M11 |
| [`M11 Landing Page Writer`](skills/m11-landing-page-writer.md) | Offer clear, next step easy | Page owner, M20, M18 |
| [`M12 Paid Media Planner`](skills/m12-paid-media-planner.md) | Controlled ad tests + economics | M13, M19, F11 |
| [`M13 Creative Director`](skills/m13-creative-director.md) | Message → visual concepts | Designer/tool, M07 |
| [`M14 Video Scriptwriter`](skills/m14-video-scriptwriter.md) | Short videos with evidence/plan | M13, producer, M15 |
| [`M15 Content Distribution`](skills/m15-content-distribution.md) | Adapt without duplication | M08, M09, M20 |
| [`M16 Partnership Marketing`](skills/m16-partnership-marketing.md) | Audience benefit + fair exchange | M05, business owner |
| [`M17 Customer Proof Editor`](skills/m17-customer-proof-editor.md) | Evidence → accurate case studies | M03, S08, S13, M11 |
| [`M18 Conversion Experiment`](skills/m18-conversion-experiment.md) | Funnel problems → measurable tests | M11, product, M19 |
| [`M19 Marketing Performance`](skills/m19-marketing-performance.md) | Activity → verified funnel outcomes | M01, M05, F11, M20 |
| [`M20 Marketing Operations`](skills/m20-marketing-operations.md) | Tracking, routing, handoffs | *(incomplete)* |

---

## Three Ways to Run the Team

1. **Single Task** — One role + one task brief
2. **Department** — Ask S01/M01/E01/F01 to select priorities, run specialists
3. **Cross-Department** — Use coordinator + one of 8 workflow recipes

---

## Key Operating Principles

- **Context Currency**: New conversation = current brief + relevant approved outputs. Don't rely on memory.
- **Tools**: Supplied files sufficient for core workflow. Live research needs browsing; calculations need code/spreadsheet.
- **Starter Approach**: Begin with one recurring job. Add second role only when work needs another speciality.
- **Evidence First**: Every material claim must have traceable source. Label facts, hypotheses, estimates, recommendations.

---

## Acquiring the Full Resource

**EfficusAI** — [efficusai.co.uk](https://efficusai.co.uk) → [AI Resources](https://efficusai.co.uk/ai-resources)

The complete 80-role resource including SEO (E01–E20), Finance (F01–F20), 8 workflows, 12 templates, and 2 worked examples is available through EfficusAI's member area or direct purchase.

---

## Adding Skills

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for the full process.

**Quick steps for missing SEO/Finance roles:**
1. Acquire full resource from EfficusAI
2. Export Notion page to Markdown
3. Create skill files in `skills/` using template
4. Update this README
5. Run validation