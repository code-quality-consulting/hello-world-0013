/*jslint
    node
*/

import assert from "assert";
import {makeGreeter} from "./index";

const greetings = {
    english: makeGreeter("English"),
    spanish: makeGreeter("Spanish"),
    german: makeGreeter("German")
};

assert.strictEqual(greetings.english(), "Hello world!");
assert.strictEqual(greetings.english("Zach"), "Hello Zach!");
assert.strictEqual(greetings.spanish(), "¡Hola mundo!");
assert.strictEqual(greetings.spanish("Alejandro"), "¡Hola Alejandro!");
assert.strictEqual(greetings.german(), "Hallo Welt!");
assert.strictEqual(greetings.german("Gunter"), "Hallo Gunter!");
console.log("Your test has passed!");
