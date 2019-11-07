import { WebStorageStateStore } from 'oidc-client';
import configs from '../../configs';

const authConfig = {
  client_id: configs.authClientId,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/callback`,
  post_logout_redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }`,
  response_type: 'token id_token',
  scope: 'openid profile email',
  userStore: new WebStorageStateStore({ store: window.localStorage }),
  authority: configs.authAuthority,
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}/silent_renew`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

export default authConfig;

