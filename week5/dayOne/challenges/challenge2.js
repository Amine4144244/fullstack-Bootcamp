function toJs() {
  return new Promise((resolve, reject) => {
    const morseObj = JSON.parse(morse);
    if (Object.keys(morseObj).length === 0) {
      reject('Error: Morse object is empty!');
    } else {
      resolve(morseObj);
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt('Enter a word or sentence:').toLowerCase();
    const morseTranslation = [];

    for (let char of userInput) {
      if (morseJS[char]) {
        morseTranslation.push(morseJS[char]);
      } else {
        reject(`Error: Character "${char}" is not in the Morse object.`);
        return;
      }
    }

    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const output = morseTranslation.join('\n');
  const pre = document.createElement('pre');
  pre.textContent = output;
  document.body.appendChild(pre);
}

toJs()
  .then(result => toMorse(result))
  .then(translation => joinWords(translation))
  .catch(error => console.log(error));
