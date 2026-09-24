# Architecture

## Current state

No Backstage runtime has been implemented yet. The repository defines the approved target architecture in `docs/prd/001-backstage-idp-mvp.md`; all integration details remain proposed until implementation.

## Proposed MVP architecture

```text
Developer
    ↓
Backstage developer portal
    ├── Software Catalog → domain, system, groups, components and APIs
    ├── Software Templates → local generated service structure
    ├── TechDocs → service documentation
    └── Integration links → future GitHub, CI/CD, Kubernetes, Argo CD, AWS and observability
```

The catalog hierarchy is `commerce` → `ecommerce-platform` → `frontend-api`,
`orders-api`, `payment-api`. Groups own components. `orders-api` provides the
initial OpenAPI contract.

## Boundaries

Backstage is the portal and integration layer; it is not CI/CD, Kubernetes,
Terraform, an observability backend or a cloud provider. Those capabilities are explicitly deferred.
