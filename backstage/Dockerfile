FROM node:24-bookworm AS build
WORKDIR /app
RUN corepack enable
COPY backstage/.yarn ./.yarn
COPY backstage/.yarnrc.yml backstage/package.json backstage/yarn.lock backstage/backstage.json backstage/tsconfig.json ./
COPY backstage/packages ./packages
COPY backstage/app-config.yaml backstage/app-config.production.yaml ./
RUN yarn install --immutable
RUN yarn tsc && yarn build:backend

FROM node:24-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app
COPY catalog /app/catalog
COPY templates /app/templates
COPY docs /app/docs
RUN corepack enable && yarn workspaces focus --all --production
EXPOSE 7007
CMD ["node", "packages/backend", "--config", "app-config.yaml", "--config", "app-config.production.yaml"]
