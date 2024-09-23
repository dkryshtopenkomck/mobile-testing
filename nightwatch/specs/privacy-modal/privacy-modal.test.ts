// Imports //

import {NightwatchAPI} from 'nightwatch';
import {UserManager} from "../../helpers/users-manager/users-manager";
import AuthFactory from "../../helpers/auth-strategy/auth-factory";
import {each} from "lodash";
import privacyModal from "./data/privacy-modal-en.json";
import {MainPage} from "../../pages/mainPage";

const userManager = new UserManager();
const userCredentials = userManager.getUserCredentials('ZKRYDMY');

const authStrategy = AuthFactory.getAuthStrategy('microsoft',
    app,
    userCredentials.email, userCredentials.signum, userCredentials.host);

const mainPage = app.page.mainPage() as MainPage;

// Tests //

describe('Privacy modal', function() {

    it('CXF-804: Test Privacy popup when user signs in first time', async function(app: NightwatchAPI) {
        await authStrategy.login();
        each(Object.keys(privacyModal), async (key) => {
            // @ts-ignore
            await app.getText(mainPage.elements[key], (result) => {
                // @ts-ignore
                app.assert.equal(result.value, privacyModal[key], `Text for ${key} should match the value from JSON`);
            });
        });
    });

    it("CXF-2290: Check that Privacy popup is closed when user taps OK button", async function(app: NightwatchAPI) {
        await authStrategy.login();
        await app.click(mainPage.privacyOkButton);
    });

    it("CXF-2291: Check that Privacy popup is closed when user taps Close icon", async function(app: NightwatchAPI) {
        await authStrategy.login();
        await app.click(mainPage.privacyCloseButton);
    });

    it("CXF-2292: Check that Privacy popup doesn't appear when user Sign In for second time", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-2293: Check that user can open the privacy link from Privacy popup from User menu", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-2294: Check that user can open the privacy information by tapping download icon from Privacy popup", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-2443: Check correct translation of Privacy popup to Spanish", async function(app: NightwatchAPI) {
        app.end();
    });
});
