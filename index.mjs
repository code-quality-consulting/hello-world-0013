/*jslint
    node
*/

export function makeGreeter(language = "English") {
    if (language === "German") {
        return function (name = "Welt") {
            return "Hallo " + name + "!";
        };
    }
    if (language === "Spanish") {
        return function (name = "mundo") {
            return "¡Hola " + name + "!";
        };
    }
    if (language === "English") {
        return function (name = "world") {
            return "Hello " + name + "!";
        };
    }
}
