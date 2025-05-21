function changeEnough(itemPrice, amountOfChange){
    let total = amountOfChange[0] * 0.25 +
                amountOfChange[1] * 0.10 +
                amountOfChange[2] * 0.05 +
                amountOfChange[3] * 0.01;
    return total >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));