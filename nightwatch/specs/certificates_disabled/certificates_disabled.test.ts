
// Imports //

import {NightwatchAPI} from 'nightwatch';

// Tests //

describe('User menu', function() {

    it("CXF-6893: If no certificates, the empty status message appears", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-6885: Certificates activity is translated in Spanish", async function(app: NightwatchAPI) {
        app.end();
    });

});
