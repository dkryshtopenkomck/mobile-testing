
import {NightwatchAPI} from "nightwatch";
import { AuthStrategy } from './auth-strategy';
import { CredentialProfileReader } from "@sant-testing/node-credential-manager";
import {MicrosoftPage} from "../../pages/microsoftPage";

class MicrosoftAuth implements AuthStrategy {
    constructor(private app: NightwatchAPI, private email: string, private signum: string, private host: string) {}

    async login(): Promise<void> {
        const credentialsReader = new CredentialProfileReader(this.signum);
        const { password, totp } = await credentialsReader.getCredentials(this.host);

        const microsoftPage = this.app.page.microsoftPage() as MicrosoftPage;
        await microsoftPage.login(this.email, password, totp);
        await this.app.appium.resetApp()
    }
}

export default MicrosoftAuth;
