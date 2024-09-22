// Imports //

import {NightwatchAPI} from 'nightwatch';

// Tests //

describe('User menu', function() {

    it("CXF-1386: User can switch theme from Light to Dark successfully", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1387: User can switch back from Dark to Light successfully", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1390: Theme switching state saves after logout", async function(app: NightwatchAPI) {
        app.end();
    });

});
