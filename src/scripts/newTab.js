"use strict";

const bgp = chrome.extension.getBackgroundPage();

const wordsList = bgp.getWords();
// maps all words and create cards

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

  const dashboardContent = document.getElementById("dashboard-content");

  //create new card
  let newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("id", word);

  // set words and definition to card content
  newCard.innerHTML = card;

  //create and add button to card
  const button = createDeleteButton(newCard);
  newCard.appendChild(button);

  // add new card to dashboard
  dashboardContent.appendChild(newCard);
}

function createDeleteButton(card) {
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "delete-btn");
  deleteButton.addEventListener("click", function() {
    removeCard(card);
  });
  return deleteButton;
}

function removeCard(cardToRemove) {
  const dashboardContent = document.getElementById("dashboard-content");

  // Removes card from dashboard
  dashboardContent.removeChild(cardToRemove);
}
