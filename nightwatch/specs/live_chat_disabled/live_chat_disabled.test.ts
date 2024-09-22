
// Imports //

import {NightwatchAPI} from 'nightwatch';

// Tests //

describe('User menu', function() {

    it("CXF-12080: Chats are not available", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-12081: Attempt to find a non-existent chat room", async function(app: NightwatchAPI) {
        app.end();
    });


});
