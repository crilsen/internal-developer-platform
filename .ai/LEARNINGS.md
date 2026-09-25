# Learnings

Append-only buffer of reusable, non-obvious learnings captured while working, so future sessions and tools do not rediscover them. This is not task state (`TASKS.md`), not a session handoff (`HANDOFF.md`), and not a durable decision record (`DECISIONS.md`).

## How to use

- Append one entry per learning. Do not rewrite or delete entries; to correct one, mark it `superseded` and add a new entry.
- Capture only learnings that are non-obvious and likely to recur. Skip anything already stated in `CONVENTIONS.md`, `DECISIONS.md`, `TOOLS.md`, or `VALIDATION.md`.
- Keep each entry short and evidence-based. Prefer `observed` facts over speculation.
- This file is a buffer, not a permanent home: promote durable learnings and keep the entry as a breadcrumb.

## Entry format

```text
### L-001 — <short title>
Date: YYYY-MM-DD
Status: active | superseded | promoted
Confidence: observed | inferred
Scope: repo | <path-or-glob> | <technology>
Context: <what was being done>
Evidence: <file:line, command output, or concrete observation>
Pattern / rule: <the reusable takeaway>
Promotion: none | CONVENTIONS.md | DECISIONS.md#ADR-nnn | TOOLS.md | VALIDATION.md
```

## Promotion rules

- Recurring pattern → `CONVENTIONS.md`
- Durable architectural choice → `DECISIONS.md` (ADR), cross-referenced here
- Safe or restricted command rule → `TOOLS.md`
- Completion or validation check → `VALIDATION.md`

After promotion, set the entry to `Status: promoted` and keep it as a breadcrumb; do not duplicate the rule body.

## Compaction

- Keep at most 40 active entries. When exceeded, consolidate related entries, promote what is durable, and mark the rest `superseded`.
- Compaction means summarizing and promoting, not erasing history. Record the compaction in `HANDOFF.md`.

## Entries

### L-001 — Local TechDocs must be generated inside the Backstage image
Date: 2026-09-24
Status: active
Confidence: observed
Scope: backstage/Dockerfile, backstage/app-config.yaml
Context: Container-first TechDocs validation.
Evidence: Previous image rendered service HTML after installing `mkdocs-techdocs-core` and using `generator.runIn: local` with local publisher storage.
Pattern / rule: A containerized local TechDocs setup needs the generator dependency and a writable persistent publisher volume.
Promotion: none

### L-002 — Keycloak OIDC requires explicit frontend wiring
Date: 2026-09-24
Status: active
Confidence: observed
Scope: backstage/packages/app/src/App.tsx, keycloak/
Context: Replacing Backstage guest auth with Keycloak.
Evidence: OAuth start/login/callback returned a Backstage identity for `crilsen` after adding the Keycloak OAuth2 API and SignInPage provider.
Pattern / rule: Configure both the backend provider and frontend OAuth2/SignInPage; disabling guest alone does not create a usable login flow.
Promotion: none

### L-003 — Runtime local catalog registration is URL-only by default
Date: 2026-09-24
Status: active
Confidence: observed
Scope: backstage/packages/backend/src/localCatalogLocations.ts, backstage/packages/backend/src/localPublisher.ts
Context: Software Template publishing generated repositories into a mounted local directory.
Evidence: `publish:local` wrote `generated-services/inventory-api`, then catalog registration returned HTTP 400 because only `url` locations were allowed.
Pattern / rule: For a local-only demo, register the catalog locations extension and allow `file`; re-run E2E after deploying that backend change. Do not treat this as a production Git integration.
Promotion: none

### L-004 — Static file catalog locations can retain stale entities
Date: 2026-09-24
Status: active
Confidence: observed
Scope: catalog/all.yaml, docs/services/*/catalog-info.yaml
Context: Moving components from one aggregate catalog file to individual documentation manifests.
Evidence: Existing catalog rows required a location refresh/restart before conflicts disappeared.
Pattern / rule: When changing static catalog locations, refresh or recreate stale locations before judging entity conflicts.
Promotion: none
