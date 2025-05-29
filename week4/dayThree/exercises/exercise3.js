const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);

const updatedUsers = usersArray.map(([username, id]) => [username, id * 2]);
console.log(updatedUsers);

