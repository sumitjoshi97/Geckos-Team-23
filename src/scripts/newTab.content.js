"use strict";

// maps all words and create cards
let wordList = JSON.parse(localStorage.getItem("wordList")) || [];

function addCard({ defs, word }) {
  let definitions = "";
  defs.map(
    (def, index) =>
      (definitions += `
      <div class="word-def">
        <span class="def-index">${index + 1}.</span>
        
        <span class="def-text">${def.type}: ${def.def}</span>
      </div>`),
  );
  const card = `<p class="word-head">${word}</p>${definitions}`;

  const dashboardContent = document.getElementById("dashboard-content");

  //create new card
  let newCard = document.createElement("div");
  newCard.className = "card";
  newCard.id = word;

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
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function() {
    removeCard(card);
  };
  return deleteButton;
}

function removeCard(cardToRemove) {
  const dashboardContent = document.getElementById("dashboard-content");

  // Removes card from dashboard
  dashboardContent.removeChild(cardToRemove);
  removeWord(cardToRemove.id);
}