function displaySudentInfo(objUser) {
    const { first, last} = objUser;
    return `Your full name is ${first} ${last}.`;
}
console.log(displaySudentInfo({
    first: 'John',
    last: 'Doe'
}));


