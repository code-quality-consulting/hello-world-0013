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

const englishGreeting = makeGreeter("English");
const spanishGreeting = makeGreeter("Spanish");
assert.strictEqual(englishGreeting(), "Hello world!");
assert.strictEqual(englishGreeting("Zach"), "Hello Zach!");
assert.strictEqual(spanishGreeting(), "¡Hola mundo!");
assert.strictEqual(spanishGreeting("Alejandro"), "¡Hola Alejandro!");
assert.strictEqual(greetings.german(), "Hallo Welt!");
console.log("Your test has passed!");
