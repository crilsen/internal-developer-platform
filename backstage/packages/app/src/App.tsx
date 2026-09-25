import { createApp } from '@backstage/frontend-defaults';
import { OAuth2 } from '@backstage/core-app-api';
import { SignInPage } from '@backstage/core-components';
import {
  BackstageIdentityApi,
  OpenIdConnectApi,
  ProfileInfoApi,
  SessionApi,
} from '@backstage/core-plugin-api';
import {
  ApiBlueprint,
  configApiRef,
  createApiRef,
  createFrontendModule,
  discoveryApiRef,
  oauthRequestApiRef,
} from '@backstage/frontend-plugin-api';
import { SignInPageBlueprint } from '@backstage/plugin-app-react';
import catalogPlugin from '@backstage/plugin-catalog/alpha';
import { navModule } from './modules/nav';
import { homeModule } from './modules/home';

const keycloakAuthApiRef = createApiRef<
  OpenIdConnectApi & ProfileInfoApi & BackstageIdentityApi & SessionApi
>({ id: 'auth.keycloak' });

const keycloakAuthApi = ApiBlueprint.make({
  name: 'keycloak',
  params: defineParams =>
    defineParams({
      api: keycloakAuthApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        oauthRequestApi: oauthRequestApiRef,
        configApi: configApiRef,
      },
      factory: ({ discoveryApi, oauthRequestApi, configApi }) =>
        OAuth2.create({
          configApi,
          discoveryApi,
          oauthRequestApi,
          environment: configApi.getOptionalString('auth.environment'),
          provider: { id: 'keycloak', title: 'Keycloak', icon: () => null },
          defaultScopes: ['openid', 'profile', 'email'],
        }),
    }),
});

const signInPage = SignInPageBlueprint.make({
  params: {
    loader: async () => props => (
      <SignInPage
        {...props}
        provider={{
          id: 'keycloak-auth-provider',
          title: 'Keycloak',
          message: 'Sign in using Keycloak',
          apiRef: keycloakAuthApiRef,
        }}
      />
    ),
  },
});

export default createApp({
  features: [
    catalogPlugin,
    navModule,
    homeModule,
    createFrontendModule({
      pluginId: 'app',
      extensions: [keycloakAuthApi, signInPage],
    }),
  ],
});
