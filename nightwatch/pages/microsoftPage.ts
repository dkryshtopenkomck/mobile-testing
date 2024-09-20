import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const microsoftPageCommands = {
    waitForLoginButton(this: EnhancedPageObject) {
        return this.waitForElementPresent('xpath', '//android.widget.TextView[@content-desc="onlineLoginSignIn-text-base"]', 60000);
    },

    clickLoginButton(this: EnhancedPageObject) {
        return this.click('xpath', '//android.widget.TextView[@content-desc="onlineLoginSignIn-text-base"]');
    },

    waitForWebViewContext(this: EnhancedPageObject) {
        return this.api.waitUntil(async () => {
            const contexts = await this.api.appium.getContexts();
            return contexts.includes('WEBVIEW_chrome');
        }, 60 * 1000);
    },

    waitForNativeContext(this: EnhancedPageObject) {
        return this.api.waitUntil(async () => {
            const contexts = await this.api.appium.getContexts();
            return contexts.includes('NATIVE_APP');
        }, 60 * 1000);
    },

    async login(this: EnhancedPageObject, email: string, password: string, otp: string) {
        await this.waitForLoginButton();
        await this.clickLoginButton();
        await this.waitForWebViewContext();
        await this.api.appium.setContext('WEBVIEW_chrome');

        await this.sendKeys('@emailInput', email);
        await this.click('@signInButton');
        await this.sendKeys('@passwordInput', password);
        await this.click('@signInButton');
        await this.click('@signInAnotherWayButton');
        await this.click('@proofTile');
        await this.sendKeys('@otpInput', otp);
        await this.click('@signInButton');
        await this.waitForNativeContext();
        await this.api.appium.setContext('NATIVE_APP');
    },
};

const microsoftPage = {
    url: 'https://login.microsoftonline.com',
    commands: [microsoftPageCommands],
    elements: {
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

export interface MicrosoftPage extends EnhancedPageObject<typeof microsoftPageCommands, typeof microsoftPage.elements> {}

export default microsoftPage;
