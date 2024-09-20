import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const microsoftPageCommands = {
    waitForLoginButton(this: EnhancedPageObject) {
        return this.waitForElementPresent('@loginButton', 60000);
    },

    clickLoginButton(this: EnhancedPageObject) {
        return this.click('@loginButton');
    },


    async login(this: EnhancedPageObject, email: string, password: string, otp: string) {

        // click otherTile if exists
        await this.waitForLoginButton();
        await this.click('@loginButton');
        await this.api.pause(5000);
        
    },
};

const keycloakPage = {
    url: 'https://login.microsoftonline.com',
    commands: [microsoftPageCommands],
    elements: {
        loginButton: {
            selector: '//android.widget.TextView[@content-desc="onlineLoginSignIn-text-base"]',
            locateStrategy: 'xpath',
        },
        otherTile: {
            selector: '#otherTile',
        },
        emailInput: {
            selector: '[type="email"]',
        },
        passwordInput: {
            selector: '[type="password"]',
        },
        signInButton: {
            selector: '[type="submit"]',
        },
        signInAnotherWayButton: {
            selector: '#signInAnotherWay',
        },
        otpInput: {
            selector: '#idTxtBx_SAOTCC_OTC',
        },
        proofTile: {
            selector: '#idDiv_SAOTCS_Proofs div.tile:last-child',
        },
    },
} satisfies PageObjectModel;

export interface KeyCloackPage extends EnhancedPageObject<typeof microsoftPageCommands, typeof keycloakPage.elements> {}

export default keycloakPage;
