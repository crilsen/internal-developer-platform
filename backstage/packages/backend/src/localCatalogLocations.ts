import { createBackendModule } from '@backstage/backend-plugin-api';
import { catalogLocationsExtensionPoint } from '@backstage/plugin-catalog-node';

// Local portfolio MVP only: enables registration of generated files on the
// shared volume. Do not expose this setting in a production deployment.
export const localCatalogLocations = createBackendModule({
  pluginId: 'catalog',
  moduleId: 'local-file-locations',
  register(reg) {
    reg.registerInit({
      deps: { locations: catalogLocationsExtensionPoint },
      async init({ locations }) {
        locations.setAllowedLocationTypes(['url', 'file']);
      },
    });
  },
});
