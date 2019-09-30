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
    let result='';
    for(let i=0; i<expr.length; i=i+10) {
        let letter='';
        if(expr[i] === '*') {
            result+=' ';
        }
        else {
            for(let n=i; n<i+10; n=n+2) {
                if(+expr[n] === 1 && +expr[n+1] === 0) {
                    letter+='.';
                }
                if(+expr[n] === 1 && +expr[n+1] === 1) {
                    letter+='-';
                }
            }
            result+=MORSE_TABLE[letter];
        }
    }
    return result;
}

module.exports = {
    decode
}