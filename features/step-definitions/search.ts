import { Given, Then, When } from '@wdio/cucumber-framework';
import searchPage from '../pageobjects/search.page.js';

const pages = {
  search: searchPage,
};

Given(/^google (.*) page is opened$/, async (page) => {
  await pages[page].open();
});

When(/^Search with (.*)$/, async () => {});

When(/^Click on first search result$/, async () => {});

Then(/^The URL should match (.*)$/, async () => {});
