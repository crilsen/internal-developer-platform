FROM node:24-bookworm AS build
WORKDIR /app
RUN corepack enable
COPY backstage/.yarn ./.yarn
COPY backstage/.yarnrc.yml backstage/package.json backstage/yarn.lock backstage/backstage.json backstage/tsconfig.json ./
COPY backstage/packages/app/package.json ./packages/app/package.json
COPY backstage/packages/backend/package.json ./packages/backend/package.json
RUN yarn install --immutable
COPY backstage/packages ./packages
COPY backstage/app-config.yaml backstage/app-config.production.yaml ./
RUN yarn tsc && yarn build:backend

FROM node:24-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 python3-pip python3-venv && \
    rm -rf /var/lib/apt/lists/* && \
    python3 -m venv /opt/techdocs-venv
ENV PATH="/opt/techdocs-venv/bin:$PATH"
RUN pip install --no-cache-dir mkdocs-techdocs-core
COPY --from=build /app /app
COPY catalog /app/catalog
COPY templates /app/templates
COPY docs /app/docs
RUN corepack enable && yarn workspaces focus --all --production && \
    tar xzf packages/backend/dist/bundle.tar.gz && \
    rm packages/backend/dist/bundle.tar.gz
EXPOSE 7007
CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
