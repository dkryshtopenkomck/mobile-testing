
// Imports //

import {NightwatchAPI} from 'nightwatch';

// Tests //

describe('User menu', function() {

    it("CXF-1500: Map View is unavailable in offline mode", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1501: Map View is unavailable when user switch from online to offline mode", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1502: Map view is available when user is back to online mode", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1503: Check Search option in offline mode", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1505: Data is populated from async storage", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1506: Check that the latest information is uploaded to WPs list", async function(app: NightwatchAPI) {
        app.end();
    });

    it("CXF-1917: Test the ability of the first log in using offline mode", async function(app: NightwatchAPI) {
        app.end();
    });

});
