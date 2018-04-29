/*jslint
    node
*/

const hello = {
    "English": "Hello",
    "Spanish": "¡Hola",
    "German": "Hallo"
};

const world = {
    "English": "world",
    "Spanish": "mundo",
    "German": "Welt"
};

export function makeGreeter(language = "English") {
    return function (name = world[language]) {
        return hello[language] + " " + name + "!";
    };
}
