module.exports = {

    sets: {
        desktop: {
            files: 'tests/regress/hermione'
        }
    },

    browsers: {
        chrome: {
            waitTimeout: 10000,
            desiredCapabilities: {
                browserName: 'chrome'
            }
        },
        firefox: {
            waitTimeout: 10000,
            desiredCapabilities: {
                browserName: 'firefox'
            }
        }
    }
};