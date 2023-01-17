const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = [];

    for (let i = 0; i < (expr.length / 10); i++) {
        arr.push(expr.substring(i * 10, (i * 10) + 10));
    }

    let finalArr = arr.map(code => {
        return code.replace(/10/g, ".").replace(/11/g, "-").replace(/\*\*\*\*\*\*\*\*\*\*/g, " ").replace(/0/gi, "");
    });
    for (let key in MORSE_TABLE) {

        finalArr.forEach((letter, i) => {
            if (key === letter) {
                finalArr[i] = MORSE_TABLE[key];
            }
        })
            ;


    }


    return finalArr.join("");
}

module.exports = {
    decode
}