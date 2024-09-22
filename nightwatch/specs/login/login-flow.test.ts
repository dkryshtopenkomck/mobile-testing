import {NightwatchAPI} from 'nightwatch';
import {UserManager} from "../../helpers/users-manager/users-manager";
import AuthFactory from "../../helpers/auth-strategy/auth-factory";

describe('Login flow', function() {

  it('CXF-1379: Basic login - correct credentials Azure flow Internal user', async function(app: NightwatchAPI) {
    const userManager = new UserManager();
    const userCredentials = userManager.getUserCredentials('ZKRYDMY');

    const authStrategy = AuthFactory.getAuthStrategy('microsoft',
        app,
        userCredentials.email, userCredentials.signum, userCredentials.host);
    await authStrategy.login();
  });

  it("CXF-1937: Test Request Access page", async function(app: NightwatchAPI) {
    await app.pause(10000)
  });
});
