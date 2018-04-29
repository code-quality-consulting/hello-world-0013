/*jslint
    node
*/
module.exports = function makeGreeting(name, language) {
    "use strict";
    if (language === "Spanish") {
        return "¡Hola mundo!";
    }
    if (name) {
        return "Hello " + name + "!";
    }
    return "Hello world!";
};

