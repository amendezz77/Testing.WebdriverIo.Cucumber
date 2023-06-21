import { Given, When, Then } from '@wdio/cucumber-framework';

import ChromePage from '../pageobjects/chrome.page.js'

import EbayPage from '../pageobjects/ebay.page.js'


Given(/^I Navegate chrome and Search Ebay/, async () => {
    await ChromePage.navegateSearchEbay();
    //await expect(EbayPage.btnSearch).toBeExisting();
    

});

When(/^I Search Pilas and view results/, async () => {
    await EbayPage.searchPilas();
    EbayPage.getResultTotal();
    expect(EbayPage.getResult).toBeExisting();
});

