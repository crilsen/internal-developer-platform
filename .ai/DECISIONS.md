# Decision Records

Durable, meaningful choices. Two types:

- **ADR** — architecture decision: how the system is structured.
- **TDR** — technology decision: stack, library, provider, protocol, or tooling.

Status lifecycle: `Proposed → Accepted → Superseded | Deprecated`. ADR and TDR use separate ID sequences.

## Modes

Choose one mode per project and record the choice at adoption. The index below is used in both modes.

- **Simple (default):** entries live inline in this file. Best for small projects and up to roughly 15–20 active records.
- **Scale:** one file per record under `docs/decisions/`, named `ADR-NNN-<slug>.md` or `TDR-NNN-<slug>.md`. This file stays as the index only.

Migrate from simple to scale when the inline log gets unwieldy. Keep IDs stable during migration.

## Entry format

```text
## ADR-NNN / TDR-NNN — Title
Type: ADR | TDR
Status: Proposed | Accepted | Superseded | Deprecated
Date: YYYY-MM-DD
Owners: <who>
Supersedes: <ID or none>

Context:
...

Decision:
...

Reasoning:
...

Consequences:
...
```

## Index

| ID | Type | Title | Status | Date | File |
| --- | --- | --- | --- | --- | --- |
| ADR-001 | ADR | Local-first Backstage MVP architecture | Accepted | 2026-09-24 | inline |

## Records

In simple mode, add entries inline here. In scale mode, keep only the index above and create files under `docs/decisions/`.

## ADR-001 — Local-first Backstage MVP architecture

Type: ADR
Status: Accepted
Date: 2026-09-24
Owners: Platform team
Supersedes: none

Context:
The portfolio MVP must demonstrate Backstage's catalog, templates and TechDocs
without cloud accounts, GitHub credentials or production services.

Decision:
Use a Backstage standalone application under `backstage/`, local catalog files,
local TechDocs generation/publishing and a local output path for the initial
software template.

Reasoning:
This keeps the platform workflow self-contained while preserving extension
points for GitHub, Kubernetes, Argo CD, observability and AWS.

Consequences:
The MVP is not a production deployment. GitHub publishing and cloud
integrations are explicit future work.

Do not backfill invented history. Record decisions that are observed, expressly documented, or approved during future work.

The design rationale for this template itself lives in [`docs/design.md`](../docs/design.md).
