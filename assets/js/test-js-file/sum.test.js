/**
 * @jest-environment jsdom
 */

 test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

const accuracyButton = require("../test-js-file")

test ("accuracyButton when checked returns true")(); {
  expect(accuracyButton.checked == true).toBe(accuracy = true)
};

const powerButton = require("../test-js-file")

test ("powerButton when checked returns true")() ; {
  expect(powerButton.checked == true).toBe(power = true)
};
  
  