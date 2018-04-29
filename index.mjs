/*jslint
    node
*/

const hello = {
    "English": "Hello",
    "Spanish": "¡Hola",
    "German": "Hallo",
    "Russian": "Привет"
};

const world = {
    "English": "world",
    "Spanish": "mundo",
    "German": "Welt",
    "Russian": "мир"
};

export function makeGreeter(language = "English") {
    return function (name = world[language]) {
        return hello[language] + " " + name + "!";
    };
}
