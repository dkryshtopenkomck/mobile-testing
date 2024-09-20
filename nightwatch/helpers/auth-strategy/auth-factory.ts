
// Imports //

import {NightwatchAPI} from "nightwatch";
import MicrosoftAuth from './microsoft-auth';
import KeycloakAuth from './keycloak-auth';
import { AuthStrategy } from './auth-strategy';

// Types & Interfaces //

type Service = 'microsoft' | 'keycloak';

// Exports //

class AuthFactory {
    static getAuthStrategy(service: Service, app: NightwatchAPI, email: string, signum: string, host: string): AuthStrategy {
        switch (service) {
            case 'microsoft':
                return new MicrosoftAuth(app, email, signum, host);
            case 'keycloak':
                return new KeycloakAuth(app, email, signum, host);
            default:
                throw new Error('Unsupported authentication service');
        }
    }
}

export default AuthFactory;
