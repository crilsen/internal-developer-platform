# Project

## Identity

- **Name:** internal-developer-platform
- **Objective:** A portfolio MVP of an Internal Developer Platform based on Backstage.
- **Purpose:** Demonstrate service discovery, ownership, TechDocs, API cataloguing and self-service Golden Paths locally.
- **Status:** Foundation and approved implementation plan exist; Backstage has not yet been generated.

## Observed

- The repository currently contains planning and agent-context documentation, a README, `.env.example` and `.gitignore`.
- No Backstage application, runtime configuration, CI workflow, Docker Compose file, catalog entities or cloud infrastructure exists yet.
- The approved MVP scope is recorded in `docs/prd/001-backstage-idp-mvp.md`.

## Constraints

- The MVP is local-first and must not require GitHub, cloud or Kubernetes credentials.
- No secrets belong in the repository.
- Future cloud integrations are roadmap items, not current implementation.
