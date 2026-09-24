# PRD-001 — Internal Developer Platform with Backstage MVP

Status: Approved
Owner: Platform team
Related decisions: None yet

## Problem / Context

Developers need a single local-first place to discover services, understand
ownership, read documentation, find API contracts and start new services using
organizational standards. This portfolio project demonstrates those Platform
Engineering concepts without introducing cloud dependencies.

## Goals

- Demonstrate a realistic, approachable Internal Developer Platform using Backstage.
- Make service discovery, ownership, documentation and API contracts visible in one portal.
- Provide a Golden Path that scaffolds a small Python/FastAPI microservice.
- Keep the MVP executable locally and suitable for a public portfolio.

## Non-goals

- EKS, Kubernetes, Terraform, Argo CD, AWS, Grafana, OpenTelemetry, SSO,
  complex RBAC, deployment pipelines, multi-cluster and multi-account support.
- Requiring GitHub credentials for the local MVP.

## Requirements

- [ ] Generate and configure a local Backstage application with TechDocs enabled.
- [ ] Add catalog entities for domain `commerce`, system `ecommerce-platform`,
  group `platform-team`, components `frontend-api`, `orders-api` and `payment-api`,
  and the relationships between them.
- [ ] Demonstrate differentiated ownership with optional `checkout-team`.
- [ ] Add service tags, lifecycle metadata and documented operational links.
- [ ] Add the `orders-api-contract` OpenAPI entity and a minimal `GET /orders/process` contract.
- [ ] Add TechDocs source for every initial service.
- [ ] Add `Create Python Microservice`, accepting service name, description,
  owner and system, and generating FastAPI, tests, Docker, CI, catalog metadata and TechDocs.
- [ ] Provide a restrained homepage with links to service creation, catalog,
  documentation and APIs.
- [ ] Support local execution via `yarn dev` and, where practical, Docker Compose.
- [ ] Add the requested Makefile targets and professional project documentation.

## Acceptance criteria

- [ ] Backstage runs locally.
- [ ] Catalog shows all three initial components with correct domain/system/owner relationships.
- [ ] TechDocs renders for catalogued services.
- [ ] The API catalog displays `orders-api-contract` and its OpenAPI definition.
- [ ] The software template is available and creates a runnable service skeleton.
- [ ] The generated service contains a Dockerfile, CI workflow, catalog metadata and docs.
- [ ] README explains the architecture, Golden Path, demo scenario, limitations and roadmap.

## Delivery plan

1. **Foundation:** generate Backstage, establish local configuration and Makefile.
2. **Catalog:** add domain, system, groups, components, API contract and catalog locations.
3. **Documentation:** enable TechDocs and author the initial service documentation.
4. **Golden Path:** create the Python microservice template and skeleton, including CI.
5. **Portal experience:** add the minimal homepage and clearly labelled future operational links.
6. **Validation and portfolio polish:** exercise the catalog/template flow, document the
   `inventory-api` scenario and verify secret hygiene.

## Risks / Open questions

- Backstage version and Node/Yarn compatibility must be chosen from current official guidance at implementation time.
- GitHub repository creation in a template requires credentials; it remains optional so the MVP stays local-first.
- Docker Compose details depend on the generated Backstage configuration and whether PostgreSQL is selected.
