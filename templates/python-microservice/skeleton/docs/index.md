# ${{ values.name }}

## Overview

${{ values.description }}

## Architecture

A minimal FastAPI HTTP service using the platform's Python Golden Path.

## Running Locally

From the generated service directory, run `docker compose up --build -d`.

## API

- `GET /` reports the service name and running status.
- `GET /health` returns `{"status": "ok"}`.

## Ownership

Owned by ${{ values.owner }} in ${{ values.system }}.

## Troubleshooting

Use `docker compose ps` and `docker compose logs service`. Check that port 8000
is free before starting the container.
