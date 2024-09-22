
// Imports //

import {NightwatchAPI} from 'nightwatch';

// Tests //

describe('User menu', function() {

    it("CXF-1395: Reset PIN code successfully", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1396: Reset pin code with invalid value", async function(app: NightwatchAPI) {
        app.end();
    });

});
