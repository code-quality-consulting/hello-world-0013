/*jslint
    node
*/
module.exports = function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        if (name !== "") {
            return "¡Hola " + name + "!";
        }
        return "¡Hola mundo!";
    }
    return "Hello " + name + "!";
};

