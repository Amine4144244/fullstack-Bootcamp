let number = prompt("Please enter a number: ");
number = Number(number);

while (number < 10){
    number = prompt("The number is too small. Please enter a new number: ");
    number = Number(number);
}