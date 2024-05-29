async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS === "true") {
        permitted.push( ... "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }

    if (process.env.LOWERCASE_LETTERS === "true") {
        permitted.push(... "abcdefghijklmnopqrstuvwxyz")//esses "..." serve para além de espalhar dentro do array ele não subistitui o que já existe dentro, mas adiciona elementos.
    }

    if (process.env.NUMBERS === "true") {
        permitted.push(... "0123456789")
    }


    if (process.env.SPECIAL_CHARACTERS === "true") {
        permitted.push(... "!@#$%&*?")
    }

    return permitted

}

export default permittedCharacters;