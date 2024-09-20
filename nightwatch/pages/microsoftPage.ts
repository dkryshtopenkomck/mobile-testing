import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const microsoftPageCommands = {
    waitForLoginButton(this: EnhancedPageObject) {
        return this.waitForElementPresent('@loginButton', 60000);
    },

    clickLoginButton(this: EnhancedPageObject) {
        return this.click('@loginButton');
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

    async clickIfAvailable(this: EnhancedPageObject, selector: string, timeout: number = 10000) {
        const isPresent = await this.waitForElementPresent(selector, timeout, 1000);
        if (isPresent) {
            await this.click(selector);
        }
    },


    async login(this: EnhancedPageObject, email: string, password: string, otp: string) {

        // click otherTile if exists
        await this.waitForLoginButton();
        await this.clickLoginButton();
        await this.api.pause(5000);
        await this.waitForWebViewContext();
        await this.api.appium.setContext('WEBVIEW_chrome');

        await this.clickIfAvailable('@otherTile');

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
        await this.api.pause(1000);
    },
};

const microsoftPage = {
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

export interface MicrosoftPage extends EnhancedPageObject<typeof microsoftPageCommands, typeof microsoftPage.elements> {}

export default microsoftPage;
