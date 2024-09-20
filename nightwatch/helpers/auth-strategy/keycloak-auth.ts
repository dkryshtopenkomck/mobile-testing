// src/types/helpers/keycloakAuth.ts
import { AuthStrategy } from './auth-strategy';
import { CredentialProfileReader } from "@sant-testing/node-credential-manager";
import { KeyCloackPage } from "../../pages/keycloakPage";
import {NightwatchAPI} from "nightwatch";

class KeycloakAuth implements AuthStrategy {
    constructor(private app: NightwatchAPI, private email: string, private signum: string, private host: string) {}

    async login(): Promise<void> {
        const credentialsReader = new CredentialProfileReader(this.signum);
        const { password, totp } = await credentialsReader.getCredentials(this.host);

        const keycloakPage = this.app.page.keycloakPage() as KeyCloackPage;
        await keycloakPage.login(this.email, password, totp);
    }
}

export default KeycloakAuth;
