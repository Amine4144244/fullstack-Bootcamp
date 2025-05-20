//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

//2
console.log(building.numberOfAptByFloor);

//3
console.log(building.numberOfAptByFloor.firstFloor + numberOfAptByFloor.thirdFloor);

//4
let secondTenant = building.nameOfTenants[1];
let rooms = building.numberOfRoomsAndRent.dan[0];
console.log(`Second tenant is ${secondTenant} and he has ${rooms} rooms.`);

//5
let sarahRent = numberOfRoomsAndRent.sarah[1]
let danRent = numberOfRoomsAndRent.dan[1]
let davidRent = numberOfRoomsAndRent.david[1]

if (sarahRent + davidRent > danRent){
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent increased to 1200.");
}
console.log(building.numberOfRoomsAndRent);