import {NightwatchAPI} from 'nightwatch';
import {MicrosoftPage} from "../pages/microsoftPage";

describe('Login flow', function() {

  it('CXF-1379: Basic login - correct credentials Azure flow Internal user', async function(app: NightwatchAPI) {
    const microsoftPage = app.page.microsoftPage() as MicrosoftPage;
    await microsoftPage.login('zkrydmy@ericsson.com', '@Q1w2e3t5r4', '123456');

  });
});
