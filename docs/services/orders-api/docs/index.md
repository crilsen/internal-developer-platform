# orders-api

## Overview

Orders processing service.

## Architecture

Conceptual order-processing component in `ecommerce-platform`. The MVP holds
its catalog metadata and OpenAPI contract; no orders-api application is deployed.

## Running Locally

Run `docker compose up -d --build` from the repository root and open this
component in the portal. There is no separate orders-api container yet.

## API

`GET /orders/process` is described by `orders-api-contract`; it is a sample
contract, not a live endpoint in this MVP.

## Ownership

Owned by the Checkout Team.

## Troubleshooting

If this page is unavailable, check `docker compose ps` and
`docker compose logs backstage`. The catalog entry is loaded from the local
`catalog-info.yaml` beside this documentation.
