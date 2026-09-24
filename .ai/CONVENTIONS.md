# Conventions

## Observed conventions

- Project documentation and planned technical labels are in English; user collaboration may be in Portuguese.
- The project uses lowercase, hyphenated identifiers for repositories, catalog entities and planned service names.
- The local-first MVP avoids required external credentials and keeps future integrations explicitly labelled.

## Recommended conventions

- Use English for technical documentation and Backstage metadata; use Portuguese when communicating with the requester unless they prefer otherwise.
- Keep files, catalog entity names and repositories lowercase and hyphenated.
- Prefer small, focused changes and document meaningful architectural choices in `DECISIONS.md`.
- Do not introduce cloud, IaC, Kubernetes or production CI/CD integrations into the MVP without a scope update.
- Treat these recommendations as guidance, not historical decisions; replace them with observed project conventions as the repository evolves.

## Documentation

- Keep `AGENTS.md` short and route-oriented.
- Reference authoritative docs instead of copying them.
- Keep `TASKS.md` current-state only and `HANDOFF.md` operational, not a chat transcript.
- Treat `LEARNINGS.md` as a bounded, append-only buffer; promote durable learnings into `CONVENTIONS.md`, `DECISIONS.md`, `TOOLS.md`, or `VALIDATION.md` instead of letting them accumulate.
- Keep tool-specific files as thin adapters that only route to `AGENTS.md`; record their paths in `.ai/ADAPTERS.md`.
- Keep the Resume block in `HANDOFF.md` current as a rolling checkpoint and honor the thresholds in `.ai/LIMITS.md`.
- Keep decision records (ADR/TDR) and requirements (PRD) separate: decisions describe technical choices, PRDs describe product scope. Choose simple or scale mode for decisions at adoption.
- Use the optional spec-driven flow (`.ai/SPECS.md`) only for large or risky changes; small changes go straight through `.ai/workflows/implement.md`.
- Only the primary agent writes `HANDOFF.md`, `TASKS.md`, and `LEARNINGS.md`; subagents report back instead of committing shared state, to avoid concurrent writes to the single source of truth.
