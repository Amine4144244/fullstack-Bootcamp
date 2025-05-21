function displayNumbersDivisible(start, end){
    for (let i = start; i <= end; i++) {
        if (i % 20 === 0){
            console.log(i);
        }
    }
}
displayNumbersDivisible(0, 500)