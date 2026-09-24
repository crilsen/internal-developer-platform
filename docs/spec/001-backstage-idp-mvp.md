# SPEC-001 — Backstage Internal Developer Platform MVP

Status: Approved
PRD: PRD-001
Related decisions: ADR-001

## Requirements

- [ ] Create a Backstage application in `backstage/` with local development configuration.
- [ ] Register commerce, ecommerce platform, ownership groups, three components and the orders OpenAPI contract.
- [ ] Enable local TechDocs and provide concise documentation per initial service.
- [ ] Provide a local-only Python microservice Golden Path without requiring GitHub credentials.
- [ ] Provide Makefile, Docker Compose and clear README instructions.

## Design

Use the official Backstage generator in `backstage/`, retaining its generated
frontend/backend architecture. Repository-owned catalog entities live under
`catalog/`. The template lives in `templates/python-microservice/` and writes
to `generated-services/` by default, making the demo work without a GitHub token.
Use Backstage's local SQLite configuration and local TechDocs generation/publishing.

## Edge cases

- Template names use lowercase letters, numbers and hyphens.
- A local output directory must not silently overwrite another service.
- Future operational links are clearly labelled rather than presented as active integrations.
- Docker-backed TechDocs requires a running Docker daemon.

## Plan

1. Scaffold Backstage with the current official generator and supported Node/Yarn tooling.
2. Configure catalog locations, TechDocs and the local homepage.
3. Add catalog entities, the OpenAPI contract and TechDocs sources.
4. Add the Python template and FastAPI skeleton.
5. Add local developer commands, Docker Compose and README walkthrough.
6. Validate configuration, types, tests and the template flow.

## Tasks

- [ ] Scaffold and verify the Backstage workspace.
- [ ] Configure catalog imports and portal entry points.
- [ ] Add catalog and TechDocs content.
- [ ] Add Golden Path template and FastAPI skeleton.
- [ ] Add developer tooling and README walkthrough.
- [ ] Validate, checkpoint, commit and push.

## Validation

- Run generated Backstage configuration, type and test checks.
- Parse catalog, template and OpenAPI YAML.
- Exercise local template generation when supported.
- Confirm `main` is clean and pushed.

## Open questions

- The exact generated Backstage layout and supported runtime are resolved from the current release.
