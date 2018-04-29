/*jslint
    node
*/
export function makeGreeting(name = "world", language = "English") {
    if (language === "Spanish") {
        if (name !== "") {
            return "¡Hola " + name + "!";
        }
        return "¡Hola mundo!";
    }
    return "Hello " + name + "!";
}

export function makeGreeter(language = "English") {
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
