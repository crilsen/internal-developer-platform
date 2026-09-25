# payment-api

## Overview

Payment orchestration service.

## Architecture

Conceptual payment component in `ecommerce-platform`. The MVP registers
metadata and documentation only; no payment-api application is deployed.

## Running Locally

Run `docker compose up -d --build` from the repository root and open this
component in the portal. There is no separate payment-api container yet.

## API

No API contract is registered for this placeholder component.

## Ownership

Owned by the Platform Team.

## Troubleshooting

If this page is unavailable, check `docker compose ps` and
`docker compose logs backstage`. The catalog entry is loaded from the local
`catalog-info.yaml` beside this documentation.
