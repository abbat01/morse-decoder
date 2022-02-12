const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const lettersInZerosAndOnes = breakStringToLetters(expr);
    const lettersInDashesAndDots = lettersInZerosAndOnes.map(letter => convertLetter(letter));
    const letters = lettersInDashesAndDots.map(encodedLetter => decodeUsingMorse(encodedLetter));

    return letters.join("");
}

function breakStringToLetters(string) {
    const arrayOfLetters = [];

    let begin = 0;
    let end = 10;

    while (begin < string.length) {
        arrayOfLetters.push(string.slice(begin, end));

        begin += 10;
        end += 10;
    }

    return arrayOfLetters;
}

function convertLetter (letter) {
    let convertedLetter = "";

    let begin = 0;
    let end = 2;

    while (begin < letter.length) {
        const symbol = letter.slice(begin, end);

        switch (symbol) {
            case "10":
                convertedLetter += ".";
                break;
            case "11":
                convertedLetter += "-";
                break;
            case "**":
                convertedLetter += " ";
                begin = 10;
                break;
            default:
                break;
        }

        begin += 2;
        end += 2;
    }

    return convertedLetter;
}

function decodeUsingMorse(encodedLetter) {
    if (encodedLetter === " ") return " ";
    return MORSE_TABLE[encodedLetter];
}

module.exports = {
    decode
}