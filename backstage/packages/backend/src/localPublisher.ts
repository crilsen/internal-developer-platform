import { access, cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';
import { coreServices, createBackendModule } from '@backstage/backend-plugin-api';
import { catalogServiceRef } from '@backstage/plugin-catalog-node';
import {
  createTemplateAction,
  scaffolderActionsExtensionPoint,
} from '@backstage/plugin-scaffolder-node';

const outputRoot = '/app/generated-services';

export const localPublisher = createBackendModule({
  pluginId: 'scaffolder',
  moduleId: 'local-publisher',
  register(reg) {
    reg.registerInit({
      deps: {
        scaffolder: scaffolderActionsExtensionPoint,
        catalog: catalogServiceRef,
        auth: coreServices.auth,
      },
      async init({ scaffolder, catalog, auth }) {
        scaffolder.addActions(
          createTemplateAction({
            id: 'publish:local',
            description: 'Publish a generated service to the local shared volume',
            schema: {
              input: {
                name: z => z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
              },
              output: {
                path: z => z.string(),
                entityRef: z => z.string(),
              },
            },
            async handler(ctx) {
              const target = join(outputRoot, ctx.input.name);
              await mkdir(outputRoot, { recursive: true });
              const exists = await access(target).then(
                () => true,
                () => false,
              );
              if (exists) {
                throw new Error(`Service ${ctx.input.name} already exists`);
              }
              await cp(ctx.workspacePath, target, { recursive: true });
              await catalog.addLocation(
                { type: 'file', target: join(target, 'catalog-info.yaml') },
                { credentials: await auth.getOwnServiceCredentials() },
              );
              const entityRef = `component:default/${ctx.input.name}`;
              ctx.output('path', `generated-services/${ctx.input.name}`);
              ctx.output('entityRef', entityRef);
              ctx.logger.info(`Published ${entityRef} to ${target}`);
            },
          }),
        );
      },
    });
  },
});
