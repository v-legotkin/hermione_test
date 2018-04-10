module.exports = {

    sets: {
        desktop: {
            files: 'tests/'
        }
    },

    browsers: {
        chrome: {
            gridUrl: "http://seleniumgrid.srv.local:4445/wd/hub",
            waitTimeout: 10000,
            desiredCapabilities: {
                browserName: 'chrome',
                version: "65.0.3325.181"
            }
        },
        firefox: {
            gridUrl: "http://seleniumgrid.srv.local:4445/wd/hub",
            waitTimeout: 10000,
            desiredCapabilities: {
                browserName: 'firefox',
                version: "58.0"
            }
        }
    }
};