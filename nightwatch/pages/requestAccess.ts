import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const requestAccessPage = {
    url: 'https://login.microsoftonline.com',
    commands: [],
    elements: {
        internalUserLabel: {
            selector: '//android.widget.ScrollView[@content-desc="requestAccess-container"]/android.view.ViewGroup/android.widget.TextView[1]',
            locateStrategy: 'xpath',
        },
        internalUserValue: {
            selector: '//android.widget.ScrollView[@content-desc="requestAccess-container"]/android.view.ViewGroup/android.widget.TextView[2]',
            locateStrategy: 'xpath',
        },
        internalUserAccessLink: {
            selector: '//android.view.ViewGroup[@content-desc="Internal user access"]/android.widget.TextView',
            locateStrategy: 'xpath',
        },
        externalUserLabel: {
            selector: '//android.widget.ScrollView[@content-desc="requestAccess-container"]/android.view.ViewGroup/android.widget.TextView[3]',
            locateStrategy: 'xpath',
        },
        externalUserValue: {
            selector: '//android.widget.ScrollView[@content-desc="requestAccess-container"]/android.view.ViewGroup/android.widget.TextView[4]',
            locateStrategy: 'xpath',
        },
        externalUserAccessLink: {
            selector: '//android.view.ViewGroup[@content-desc="External user access"]/android.widget.TextView',
            locateStrategy: 'xpath',
        },
        strongAuthLabel: {
            selector: '//android.widget.ScrollView[@content-desc="requestAccess-container"]/android.view.ViewGroup/android.widget.TextView[5]',
            locateStrategy: 'xpath',
        },
        strongAuthValue: {
            selector: '//android.widget.ScrollView[@content-desc="requestAccess-container"]/android.view.ViewGroup/android.widget.TextView[6]',
            locateStrategy: 'xpath',
        },
        manageInternalUserLink: {
            selector: '//android.view.ViewGroup[@content-desc="Manage Internal user Strong Authentication"]/android.widget.TextView',
            locateStrategy: 'xpath',
        },
        manageExternalUserLink: {
            selector: '//android.view.ViewGroup[@content-desc="Manage External user Strong Authentication"]/android.widget.TextView',
            locateStrategy: 'xpath',
        }
    },
} satisfies PageObjectModel;

export interface RequestAccessPage extends EnhancedPageObject<typeof requestAccessPage.elements> {}

export default requestAccessPage;
