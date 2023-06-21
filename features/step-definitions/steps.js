import { Given} from '@wdio/cucumber-framework';

import ChromePage from '../pageobjects/chrome.page.js'
import EbayPage from '../pageobjects/ebay.page.js'


Given(/^I Navegate chrome and Search Ebay/, async () => {
    await ChromePage.navegateSearchEbay();

    await EbayPage.searchPilas();
    await EbayPage.getResultTotal();
    expect(EbayPage.getResult).toBeExisting();
});

