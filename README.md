# Internal Developer Platform with Backstage

An MVP developer portal that demonstrates Platform Engineering practices with
Backstage: a software catalog, ownership, TechDocs, API contracts and a Golden
Path for Python microservices.

## Status

Implementation in progress. The portal is container-first: `docker compose up --build`
starts Backstage, PostgreSQL and Keycloak; cloud integrations remain out of scope for the MVP.

## Planned capabilities

- Software Catalog for `frontend-api`, `orders-api`, and `payment-api`
- Domain, system, group, component, and API relationships
- TechDocs for the catalogued services
- `Create Python Microservice` software template
- Generated FastAPI service skeleton with Docker, CI, tests, documentation,
  and catalog metadata
- Local-first execution with Yarn and Docker Compose

## Architecture

```mermaid
flowchart TD
  Developer --> Backstage
  Backstage --> Catalog[Software Catalog]
  Backstage --> Templates[Software Templates]
  Backstage --> TechDocs
  Backstage --> APIs[API Catalog]
  Templates --> GitRepository[Git repository]
  GitRepository --> GitHubActions[GitHub Actions]
  Catalog --> Frontend[frontend-api]
  Catalog --> Orders[orders-api]
  Catalog --> Payment[payment-api]
```

Backstage is the developer portal, catalog, self-service and documentation
layer. It does not replace Git, CI/CD, Kubernetes, Terraform, observability or
cloud providers; it connects developers to those capabilities.

## Golden Path

The planned `Create Python Microservice` template asks for a service name,
description, owner and system. It creates a small FastAPI service with:

- `GET /health` and `GET /`
- tests, Dockerfile and dependency manifest
- a GitHub Actions CI workflow (lint, tests and Docker build)
- `catalog-info.yaml`, `mkdocs.yml` and starter TechDocs

This means a developer asks for a capability and receives an organization-wide
standard path instead of manually assembling repository structure, CI, Docker,
documentation and catalog metadata.

## Demo scenario (planned)

1. In Backstage, select **Create Python Microservice**.
2. Enter `inventory-api`, its description, owner and system.
3. Generate the service structure and inspect `catalog-info.yaml`.
4. Run the FastAPI service and tests.
5. Open its TechDocs from the catalog.

## Roadmap

After the local MVP: GitHub repository creation and authentication, Kubernetes
and Argo CD plugins, Grafana/OpenTelemetry integration, EKS and AWS metadata,
Terraform templates, scorecards, SLO/security/cost metadata, RBAC and
production deployment.

## Planning

The approved MVP scope and staged implementation plan live in
[`docs/prd/001-backstage-idp-mvp.md`](docs/prd/001-backstage-idp-mvp.md).

## Run locally

Prerequisite: Docker Desktop (or Docker Engine with the Compose plugin) must be running.

```bash
docker compose up --build
```

The first build downloads the Backstage dependencies and can take several minutes.
When the services are ready, open `http://localhost:7007`, choose **Sign in using
Keycloak**, and use the local demo account `crilsen` / `crilsen`. Keycloak is
available at `http://localhost:8080`. These credentials and the local client
secret are for a disposable portfolio demo only; never expose this Compose
stack to a public network as-is.

Run in the background with `make up` (or `docker compose up --build -d`), inspect
logs with `make logs`, and stop the environment with `make down`. To remove the
local persisted data as well, run `make clean` (destructive).

The Compose stack contains:

- `backstage`: the portal, catalog, Scaffolder and TechDocs backend on port 7007;
- `postgres`: the Backstage database, persisted in the `postgres-data` Docker volume;
- `keycloak`: local identity provider on port 8080, persisted in `keycloak-data`.

`make down` stops containers without deleting the database or Keycloak realm.
`make up` starts them again. Generated TechDocs files are persisted in the
`techdocs-data` volume. The Markdown source stays versioned in `docs/services/`.

All runtime dependencies are containerized. Node and Yarn are only needed when
developing the Backstage source outside the container.
