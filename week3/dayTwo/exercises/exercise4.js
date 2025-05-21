//1
function hotelCost(){
   while (true){
    let nights = prompt("How many nights will you stay at the hotel?");
    if (!isNaN(nights) && nights !== "" && nights !== null){
        return Number(nights) * 140;
    }
    alert("Please enter a valid number of nights.");
   }
}
// 2
function planeRideCost(){
    while(true){
        let destination = prompt("What's your destination?");
        if (isNaN(destination) && destination !== Number && destination !== null){
            destination = destination.toLowerCase();
            if (destination === "london")
                return 183;
            if (destination === "paris")
                return 220;
            return 300;
        }
        alert("Please enter a valid destination."); 
    }
}
// 3
function rentalCarCost(){
    while(true){
        let days = prompt("How many days would you like to rent the car?");
        if (!isNaN(days) && days !== "" && days !== null){
            days = Number(days);
            let cost = days * 40;
            if (days > 10) cost *= 0.95;
            return cost
        }
        alert("Please enter a valid number of days.")
    }
}
// 4
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  const total = hotel + plane + car;

  console.log(`The car cost: $${car}`);
  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane tickets cost: $${plane}`);
  console.log(`Total vacation cost: $${total}`);
}

// 5
totalVacationCost();