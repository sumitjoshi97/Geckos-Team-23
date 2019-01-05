"use strict";

const wordsList = [
  {
    word: "some",
    definition: [
      "asdasd",
      "asdasdasd",
      "asdasdasdasd sdfsdf sd f df  df s d sdf sf df dfffffsdffdf ",
    ],
  },
  { word: "some2", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "som3", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "som4", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some5", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some2", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "som3", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "som4", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some2", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "som3", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "som4", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some5", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
  { word: "some2", definition: ["asdasd", "asdasdasd", "asdasdasdasd"] },
];

// maps all words and create cards
wordsList.map(word => addCard(word.word, word.definition));

function addCard(word, definition) {
  let definitions = "";
  definition.map(
    (def, index) =>
      (definitions += `
      <div class="word-def">
        <span>${index + 1}.</span>
        <span>${def}</span>
      </div>`),
  );
  const card = `<p class="word-head">${word}</p>${definitions}`;

  const dashboard = document.getElementById("dashboard-content");

  //create new card
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", word);

  // set words and definition to card content
  newCard.innerHTML = card;

  // add new card to dashboard
  dashboard.appendChild(newCard);
}
