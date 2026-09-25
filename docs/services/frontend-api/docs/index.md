# frontend-api

## Overview

Edge API for the ecommerce frontend.

## Architecture

Conceptual entry point for the `ecommerce-platform` system. This MVP registers
metadata and documentation only; no frontend-api application is deployed.

## Running Locally

Start the portal with `docker compose up -d --build` from the repository root,
then open this component in the catalog. There is no separate service container yet.

## API

No API contract is registered for this placeholder component.

## Ownership

Owned by the Checkout Team.

## Troubleshooting

If this page is unavailable, check `docker compose ps` and
`docker compose logs backstage`. The catalog entry is loaded from the local
`catalog-info.yaml` beside this documentation.
