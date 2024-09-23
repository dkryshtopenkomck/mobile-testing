import {PageObjectModel, EnhancedPageObject, NightwatchAPI} from 'nightwatch';

const ENTER_KEYCODE = 66;

const waitForWebViewContext = async (api: NightwatchAPI) => {
    return api.waitUntil(async () => {
        const contexts = await api.appium.getContexts();
        return contexts.includes('WEBVIEW_chrome');
    }, 60 * 1000);
}

const waitForNativeContext = async (api: NightwatchAPI) => {
    return api.waitUntil(async () => {
        const contexts = await api.appium.getContexts();
        return contexts.includes('NATIVE_APP');
    }, 60 * 1000);
}

const clickIfAvailable = async (api: NightwatchAPI, selector: string, timeout: number = 5000) => {
    try {
        // Wait for the element to be present
        // await api.waitForElementPresent(selector, timeout, false);

        // Check the element count
        const count = await api.elements('css selector', selector);
        if (count.length > 0) {
            await api.click(selector);
        } else {
            // Element not found, you can log this if needed
            console.log(`Element ${selector} not found within ${timeout} milliseconds.`);
        }
    } catch (error) {
        // Handle the error for timeout or other issues
        console.log(`Error while checking presence of ${selector}:`, error?.message);
    }
}


const microsoftPageCommands = {

    async login(this: EnhancedPageObject, email: string, password: string, otp: string) {

        // click otherTile if exists
        await this.waitForElementPresent('@loginButton', 90000);
        await this.click('@loginButton');
        await this.api.pause(5000);
        await waitForWebViewContext(this.api);
        await this.api.appium.setContext('WEBVIEW_chrome');

        await clickIfAvailable(this.api, '#otherTile', 5000);

        await this.sendKeys('@emailInput', email);
        await this.click('@signInButton');
        await this.api.pause(1000);
        await this.sendKeys('@passwordInput', password);
        await this.click('@signInButton');
        await this.click('@signInAnotherWayButton');
        await this.click('@proofTile');
        await this.sendKeys('@otpInput', otp);
        // await this.click('@signInButton');
        await this.api.appium.pressKeyCode(ENTER_KEYCODE);
        await this.api.pause(1000);
        await this.api.appium.pressKeyCode(ENTER_KEYCODE);
        await waitForNativeContext(this.api);
        await this.api.appium.setContext('NATIVE_APP');
        await this.api.pause(10000);
        //
        // Set pin code
        const pinCode = '1234';
        await this.sendKeys('@passwordField', pinCode);
        await this.sendKeys('@confirmPasswordField', pinCode);
        await this.click('@submitButton');
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
        //
        // Pin code form
        passwordField: {
            selector: '//android.widget.EditText[@content-desc="firstAppRunInputPassword-text-input"]',
            locateStrategy: 'xpath',
        },
        confirmPasswordField: {
            selector: '//android.widget.EditText[@content-desc="firstAppRunInputPasswordConfirmation-text-input"]',
            locateStrategy: 'xpath',
        },
        submitButton: {
            selector: '//android.view.ViewGroup[@content-desc="firstAppRunInputSave"]',
            locateStrategy: 'xpath',
        },
        //
        // Request access
        requestAccessButton: {
            selector: '//android.view.ViewGroup[@content-desc="Request Access"]',
            locateStrategy: 'xpath',
        },
    },
} satisfies PageObjectModel;

export interface MicrosoftPage extends EnhancedPageObject<typeof microsoftPageCommands, typeof microsoftPage.elements> {}

export default microsoftPage;
