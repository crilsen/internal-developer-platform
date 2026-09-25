# ${{ values.name }}

${{ values.description }}

Run with Docker: `docker compose up --build -d`.

Then open `http://localhost:8000/health`. Stop with `docker compose down`.

Run tests and lint in an ephemeral Python container:

```bash
docker run --rm -v "$PWD:/service" -w /service python:3.13-slim sh -c \
  'pip install -r requirements.txt pytest httpx ruff && ruff check app tests && pytest'
```
