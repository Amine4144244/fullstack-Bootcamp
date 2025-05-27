const usernames = [];
gameInfo.forEach(player => {
  usernames.push(player.username + "!");
});
console.log(usernames); 

const winners = [];
gameInfo.forEach(player => {
  if (player.score > 5) {
    winners.push(player.username);
  }
});
console.log(winners); 

let totalScore = 0;
gameInfo.forEach(player => {
  totalScore += player.score;
});
console.log(totalScore); 