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
    let exprArr = expr.split("").map((letter) => {
        for (let key in MORSE_TABLE) {
            if (letter.toLowerCase() === MORSE_TABLE[key]) {
                return key;
            } else if (letter === " ") {
                return "**********";
            }
        }

    });
    let a = exprArr.map(code => {
        console.log(code);
        return code.replace(/\./g, 10).replace(/-/g, 11);
    });

    let finalArr = a.map(code => {
        return "0".repeat(10 - code.length) + code;
    });


    return finalArr.join("");
}

module.exports = {
    decode
}