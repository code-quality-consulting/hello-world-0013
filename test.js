/*jslint
    node
*/

const assert = require("assert");

// Tests strict equality between the actual and expected parameters as determined by the SameValue Comparison.

// If the values are not strictly equal, an AssertionError is thrown with a message property set equal to the value of the message parameter. If the message parameter is undefined, a default error message is assigned. If the message parameter is an instance of an Error then it will be thrown instead of the AssertionError.

function makeGreeting() {
    "use strict";
    return "Hello world!";
}
assert.strictEqual(makeGreeting(), "Hello world!");
console.log("Your test has passed!");
