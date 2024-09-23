import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const mainPage = {
    url: 'https://login.microsoftonline.com',
    commands: [],
    elements: {
        privacyTitle: {
            selector: '//android.widget.TextView[@content-desc="privacy-title-base"]',
            locateStrategy: 'xpath',
        },
        privacyDocumentName: {
            selector: '//android.widget.TextView[@content-desc="privacyDocumentName-base"]',
            locateStrategy: 'xpath',
        },
        privacyDataController: {
            selector: '//android.widget.TextView[@content-desc="privacyDataController-base"]',
            locateStrategy: 'xpath',
        },
        privacyPersonalData: {
            selector: '//android.widget.TextView[@content-desc="privacyPersonalData-base"]',
            locateStrategy: 'xpath',
        },
        privacyCategoriesOfData: {
            selector: '//android.widget.TextView[@content-desc="privacyCategoriesOfData-base"]',
            locateStrategy: 'xpath',
        },
        privacyBNEW: {
            selector: '//android.widget.TextView[@content-desc="privacyBNEW-base"]',
            locateStrategy: 'xpath',
        },
        privacyThirdParty: {
            selector: '//android.widget.TextView[@content-desc="privacyThirdParty-base"]',
            locateStrategy: 'xpath',
        },
        privacyAnonymizedStore: {
            selector: '//android.widget.TextView[@content-desc="privacyAnonymizedStore-base"]',
            locateStrategy: 'xpath',
        },
        privacyRights: {
            selector: '//android.widget.TextView[@content-desc="privacyRights-base"]',
            locateStrategy: 'xpath',
        },
        privacyDecision: {
            selector: '//android.widget.TextView[@content-desc="privacyDecision-base"]',
            locateStrategy: 'xpath',
        },
        privacyOkButton: {
            selector: '//android.widget.TextView[@content-desc="privacy-OK-text-base"]',
            locateStrategy: 'xpath',
        },
        privacyCloseButton: {
            selector: '//android.view.ViewGroup[@content-desc="privacy-closeButton"]',
            locateStrategy: 'xpath',
        }
    },
} satisfies PageObjectModel;

export interface MainPage extends EnhancedPageObject<typeof mainPage.elements> {}

export default mainPage;
