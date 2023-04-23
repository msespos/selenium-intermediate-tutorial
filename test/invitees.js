const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");

const url = "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html";

suite(function(env) {
  describe('RSVP site', function() {
    it('has invitee list', async function() {
      this.timeout(10000);
      let driver = env.builder().build();
      await driver.get(url);
      let elements = await driver.findElements(By.id('invitedList'));
      assert(elements.length > 0);
      driver.quit();
    });
  });
});