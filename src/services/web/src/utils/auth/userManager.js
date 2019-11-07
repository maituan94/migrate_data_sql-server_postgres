import { createUserManager } from 'redux-oidc';

import authConfig from './auth-config';

const userManager = createUserManager(authConfig);


export default userManager;
export const onSignIn = () => userManager.signinRedirect();
export const onSignOut = () => userManager.signoutRedirect();
