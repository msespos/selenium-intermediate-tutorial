const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");
const RsvpPage = require('../pages/rsvp.js');
const { elementLocated } = require("selenium-webdriver/lib/until.js");

suite(function(env) {
  describe('RSVP site', function() {
    let driver;
    let page;
    
    before(async function() {
      this.timeout(10000);
      driver = await env.builder().build();
      page = new RsvpPage(driver);
      await page.open();
    });

    it('has invitee list', async function() {
      let elements = await driver.findElements(page.locators.invitedList);
      assert(elements.length > 0);
    });

    it('has registration form', async function() {
      let elements = await driver.findElements(page.locators.registrationForm);
      assert(elements.length > 0);
    });

    it('loads existing invitations', async function() {
      let list = await driver.findElement(page.locators.invitedList);
      await driver.wait(
        until.elementLocated(page.locators.invitees)
      );
      let text = await list.getText();
      assert(text.includes("Craig Dennis"));
    });

    after(async function() {
      driver.quit();
    });
  });
});