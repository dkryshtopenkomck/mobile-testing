require('dotenv').config();

const additonalEnvironments = require("./environments");

if(!additonalEnvironments.test_settings)
  additonalEnvironments.test_settings = {};

const browserStack = {
  webdriver: {
    start_process: false
  },

  selenium: {
    host: 'hub.browserstack.com',
    port: 443
  },
  desiredCapabilities: {
    'bstack:options': {
      userName: process.env.BROWSERSTACK_USERNAME,
      accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
      appiumVersion: '1.22.0',
    }
  },
}

const nightwatchConfigs = {
  src_folders: ['nightwatch/specs'],
  page_objects_path: ["nightwatch/pages"],
  live_output: true,
  plugins: ['@nightwatch/browserstack'],

  // browserstack plugin settings...
  '@nightwatch/browserstack': {
    // set true to manage browserstack local tunnel. Defaults to false.
    browserstackLocal: false,
    test_observability: {
      enabled: true,
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
      projectName: "BrowserStack Samples",
      buildName: "BrowserStack Samples build",
    }

  },

  test_settings: {
    default: {
      launch_url: 'https://nightwatchjs.org',
      // request_timeout_options: {
      //   timeout: 100000,
      // },
      skip_testcases_on_fail: false,
      end_session_on_fail: true,
    },

    browserstack:  {
      ...browserStack
    },

    "browserstack.android": {
      extends: 'browserstack',
      'desiredCapabilities': {
        browserName: null,
        'appium:options': {
          automationName: 'UiAutomator2',
          // custom id for the uploaded app: https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id
          app: process.env.BROWSERSTACK_APP_ID || "cx-mobile-app",
          platformVersion: '11.0',
          deviceName: 'Google Pixel 5'
        },
        appUploadPath: process.env.BROWSERSTACK_APP_ID ? undefined : './apps/app-cxacc-global-release.apk'
      }
    },

  }
}

for(let key in additonalEnvironments.test_settings) {
  nightwatchConfigs.test_settings[key] = {
    ...browserStack,
    ...additonalEnvironments.test_settings[key]
  };
}

module.exports = nightwatchConfigs;
