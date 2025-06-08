// First, properly define the morse JSON string
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// First function - converts JSON string to JS object
function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseJS = JSON.parse(morse);
            if (Object.keys(morseJS).length === 0) {
                reject("Morse JavaScript object is empty");
            } else {
                resolve(morseJS);
            }
        } catch (error) {
            reject("Error parsing JSON: " + error.message);
        }
    });
}

// Second function - translates user input to Morse code
function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        // For Node.js, we'll use the readline module instead of prompt()
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question("Enter a word or sentence to translate to Morse code: ", (userInput) => {
            readline.close();
            
            if (!userInput) {
                reject("No input provided");
                return;
            }

            const lowerCaseInput = userInput.toLowerCase();
            const translation = [];
            
            for (const char of lowerCaseInput) {
                if (!morseJS[char]) {
                    reject(`Character '${char}' doesn't exist in Morse code`);
                    return;
                }
                translation.push(morseJS[char]);
            }
            
            resolve(translation);
        });
    });
}

// Third function - displays Morse code translation in the console
function joinWords(morseTranslation) {
    console.log(morseTranslation.join('\n'));
}

// Chain the three functions
toJs()
    .then(morseJS => toMorse(morseJS))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => {
        console.error(error);
    });