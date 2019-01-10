"use strict";

// maps all words and create cards
let wordList = JSON.parse(localStorage.getItem("wordList")) || [];
if (wordList.length > 0) {
  wordList.map(word => addCard(word));
}

function addCard({ defs, word }) {
  let definitions = "";
  defs.map(
    (def, index) =>
      (definitions += `
      <div class="word-def">
        <span class="def-index">${index + 1}.</span>
        <div class="def">
          <span class="def-type">${def.type}</span>
          <span class="def-text"> ${def.def}</span>
        </div>
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

function removeWord(word) {
  wordList = wordList.filter(w => w.word !== word);

  if (wordList.length === 0) {
    localStorage.removeItem("wordList");
  } else {
    localStorage.setItem("wordList", JSON.stringify(wordList));
    window.location.reload();
  }
}

const msnry = new Masonry("#dashboard-content", {
  itemSelector: ".card",
});
