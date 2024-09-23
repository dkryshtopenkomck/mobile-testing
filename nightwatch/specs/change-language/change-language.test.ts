
// Imports //

import {NightwatchAPI} from 'nightwatch';

// Tests //

describe('User menu', function() {

    it("CXF-1485: User can change language from English to Spanish successfully", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-2314: Check correct translation to Spanish on Side Menu", async function(app: NightwatchAPI) {
        app.end();
    });

});
