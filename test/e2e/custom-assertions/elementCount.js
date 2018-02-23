// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = (selector, count) => {
  this.message = `Testing if element <${selector}> has count: ${count}`;
  this.expected = count;
  this.pass = val => val === count;
  this.value = res => res.value;
  this.command = cb => this.api.execute(
    selectorB => document.querySelectorAll(selectorB).length,
    [selector],
    cb,
  );
};
