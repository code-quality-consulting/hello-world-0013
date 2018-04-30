/*jslint
    node
*/

const hello = {
    "English": "Hello",
    "Spanish": "¡Hola",
    "German": "Hallo",
    "Russian": "Привет",
    "Chinese": "你好"
};

const world = {
    "English": "world",
    "Spanish": "mundo",
    "German": "Welt",
    "Russian": "мир",
    "Chinese": "世界"
};

export function makeGreeter(language = "English") {
    if (language === "Chinese") {
        return function (name = world[language]) {
            return hello[language] + " " + name;
        }
    }
    return function (name = world[language]) {
        return hello[language] + " " + name + "!";
    };
}
