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
    if (language === "English") {
        return function () {
            return "Hello world!";
        };
    }
}
