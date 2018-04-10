'use strict';

const assert = require('chai').assert;
const tests_config = require('../../_tests_config');
const url_secure = tests_config.root_url_secure;

describe('open Sberbank Online ps in frame', function () {
    it('should open payment page', function () {
        return this.browser

            .url('https://livedemo.xsolla.com/paystation')

            .setCookie({name: 'host', value: url_secure})

            .waitForExist('.link')
            .click('.link')

            .waitForExist('.xpaystation-widget-lightbox-content iframe')

            .frame(0)

            .waitForExist('.virtual-item-list x-virtual-item-list-option:nth-of-type(3) .virtual-item-option-footer-available-button')
            .waitForExist('.navigation-bar-menu .navigation-bar-menu-item:nth-of-type(2)')
            .click('.navigation-bar-menu .navigation-bar-menu-item:nth-of-type(2)')

            .waitForExist('.pricepoint-list x-pricepoint-grid-option:nth-of-type(1) button')
            .click('.pricepoint-list x-pricepoint-grid-option:nth-of-type(1) button')

            .waitForExist('.payment-widget-list .payment-widget:nth-of-type(1)')
            .click('.payment-list-navigation-expand')

            .waitForExist('.payment-methods-search .control-search input')
            .setValue('.payment-methods-search .control-search input', 'sberb')

            .waitForExist('.payment-methods-list .payment-method:nth-of-type(1)')
            .click('.payment-methods-list .payment-method:nth-of-type(1)')

            .waitForExist('.form-navigation-submit')
            .click('.form-navigation-submit')

            .waitForExist('.payment-waiting-button')

            .getText('.payment-waiting-button')
            .then(function (title) {
                assert.equal(title, 'Start again')
            })

            .click('.payment-waiting-button')

            .waitForExist('.form-navigation-submit')
            .getText('.form-checkout p')
            .then(function (title) {
                assert.equal(title, 'Click "Continue" and you will be redirected to the payment system.')
            })

    });
});