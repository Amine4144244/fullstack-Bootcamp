colors = ["red", "bleu", "green"];

for (let i = 0; i < colors.lenght; i++){
    console.log('My #${i + 1} choice is ${colors[i]}');
}

const colors = ["red", "bleu", "green"];
const suffixes = ["st", "nd", "rd"];

for (let i = 0; i < colors.length; i++){
    let suffix = suffixes[i];
    console.log('My ${i + 1}${suffix} choice is ${colors[i]}');
}