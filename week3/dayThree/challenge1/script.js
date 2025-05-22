let userInputs = {};
const storyElement = document.getElementById("story");

const form = document.getElementById("libform");
const libButton = document.getElementById("lib-button");
const shuffleButton = document.getElementById("shuffle-button");

const storyTemplates = [
  (noun, adj, person, verb, place) =>
    `${person} went to ${place} with a ${adj} ${noun} and started to ${verb} in the middle of the crowd!`,

  (noun, adj, person, verb, place) =>
    `Once upon a time, ${person} found a ${adj} ${noun} in ${place} and couldn’t stop ${verb}ing.`,

  (noun, adj, person, verb, place) =>
    `Did you know that ${person} likes to ${verb} with a ${adj} ${noun} at ${place}? Crazy!`
];

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    alert("Please fill in all fields!");
    return;
  }

  userInputs = { noun, adjective, person, verb, place };

  const story = storyTemplates[0](noun, adjective, person, verb, place);
  storyElement.textContent = story;
});

shuffleButton.addEventListener("click", function () {
  if (Object.keys(userInputs).length === 0) {
    alert("Please fill the form and click 'Lib it!' first.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * storyTemplates.length);
  const { noun, adjective, person, verb, place } = userInputs;
  const shuffledStory = storyTemplates[randomIndex](noun, adjective, person, verb, place);

  storyElement.textContent = shuffledStory;
});
