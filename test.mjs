/*jslint
    node
*/

import assert from "assert";
import {makeGreeter} from "./index";

const greetings = {
    english: makeGreeter("English"),
    spanish: makeGreeter("Spanish"),
    german: makeGreeter("German"),
    russian: makeGreeter("Russian"),
    chinese: makeGreeter("Chinese")
};

assert.strictEqual(greetings.english(), "Hello world!");
assert.strictEqual(greetings.english("Zach"), "Hello Zach!");
assert.strictEqual(greetings.spanish(), "¡Hola mundo!");
assert.strictEqual(greetings.spanish("Alejandro"), "¡Hola Alejandro!");
assert.strictEqual(greetings.german(), "Hallo Welt!");
assert.strictEqual(greetings.german("Gunter"), "Hallo Gunter!");
assert.strictEqual(greetings.russian(), "Привет мир!");
assert.strictEqual(greetings.russian("Захар"), "Привет Захар!");
assert.strictEqual(greetings.chinese(), "你好 世界");
console.log("Your test has passed!");
