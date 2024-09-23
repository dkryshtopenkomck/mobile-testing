import {NightwatchAPI} from 'nightwatch';
import {UserManager} from "../../helpers/users-manager/users-manager";
import AuthFactory from "../../helpers/auth-strategy/auth-factory";
import {RequestAccessPage} from "../../pages/requestAccess";
import requestAccessEn from "./data/request-access-en.json";
import {each} from 'lodash';
import {MicrosoftPage} from "../../pages/microsoftPage";

const userManager = new UserManager();
const userCredentials = userManager.getUserCredentials('ZKRYDMY');

const authStrategy = AuthFactory.getAuthStrategy('microsoft',
    app,
    userCredentials.email, userCredentials.signum, userCredentials.host);

describe('Login flow', function() {

  it('CXF-1379: Basic login - correct credentials Azure flow Internal user', async function(app: NightwatchAPI) {
    await authStrategy.login();
  });

  it('CXF-16546: Check What is new screen after release', async function(app: NightwatchAPI) {
    app.end()
  });

  it('CXF-1394: User successfully logout from the system', async function(app: NightwatchAPI) {
    app.end()
  });

  it('CXF-1380: Check logout flow', async function(app: NightwatchAPI) {
    app.end()
  });

  it("CXF-1937: Test Request Access page", async function(app: NightwatchAPI) {
    const microsoftPage = app.page.microsoftPage() as MicrosoftPage;
    await app.waitForElementPresent(microsoftPage.elements.requestAccessButton, 90000);
    await app.click(microsoftPage.elements.requestAccessButton);
  });

  it("CXF-1733: Check Request Access page with all links associated", async function(app: NightwatchAPI) {
    const requestAccessPage = app.page.requestAccess() as RequestAccessPage;
    const microsoftPage = app.page.microsoftPage() as MicrosoftPage;
    await app.waitForElementPresent(microsoftPage.elements.requestAccessButton, 90000);
    await app.click(microsoftPage.elements.requestAccessButton);
    each(Object.keys(requestAccessEn), async (key) => {
      // @ts-ignore
      await app.getText(requestAccessPage.elements[key], (result) => {
        // @ts-ignore
        app.assert.strictEqual(result.value, requestAccessEn[key], `Text for ${key} should match the value from JSON`);
      });
    });
  });

  it("CXF-1380: Check logout flow", async function(app: NightwatchAPI) {
app.end()
  });

  it("CXF-2332: Check correct translation of Sign In page to Spanish", async function(app: NightwatchAPI) {
    app.end()
  });

  it("CXF-2333: Check correct translation of Request Access page to Spanish", async function(app: NightwatchAPI) {
    app.end()
  });
});
