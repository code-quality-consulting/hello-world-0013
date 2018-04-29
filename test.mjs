/*jslint
    node
*/

import assert from "assert";
import {makeGreeting, makeGreeter} from "./index";

// Tests strict equality between the actual and expected parameters as determined by the SameValue Comparison.

// If the values are not strictly equal, an AssertionError is thrown with a message property set equal to the value of the message parameter. If the message parameter is undefined, a default error message is assigned. If the message parameter is an instance of an Error then it will be thrown instead of the AssertionError.
const englishGreeting = makeGreeter("English");
const spanishGreeting = makeGreeter("Spanish");
assert.strictEqual(englishGreeting(), "Hello world!");
assert.strictEqual(makeGreeting("Zach"), "Hello Zach!");
assert.strictEqual(spanishGreeting(), "¡Hola mundo!");
assert.strictEqual(makeGreeting("Alejandro", "Spanish"), "¡Hola Alejandro!");
console.log("Your test has passed!");
