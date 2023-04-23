const {Browser, By, Key, until} = require("selenium-webdriver");
const {suite} = require("selenium-webdriver/testing");
const assert = require("assert");

const url = "https://treehouse-projects.github.io/selenium-webdriver-intermediate/waits/app/index.html";

suite(function(env) {
  describe('RSVP site', function() {
    let driver;
    
    before(async function() {
      this.timeout(10000);
      driver = env.builder().build();
      await driver.get(url);
    });

    it('has invitee list', async function() {
      let elements = await driver.findElements(By.id('invitedList'));
      assert(elements.length > 0);
    });

    it('has registration form', async function() {
      let elements = await driver.findElements(By.id('registrar'));
      assert(elements.length > 0);
    })

    after(async function() {
      driver.quit();
    });
  });
});