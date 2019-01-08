// basic fetching of word
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.word) {
    const DICT_API = "d1a139c7-2cc9-4efb-99cd-5c339d14d200";
    const URL = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${
      request.word
    }?key=${DICT_API}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        let definitionData = [];

        for (let i = 0; i < 3; i++) {
          if (data[i]) {
            const response = { type: data[i].fl, def: data[i].shortdef[0] };
            definitionData.push(response);
          }
        }

        const newWord = {
          word: request.word,
          defs: definitionData,
        };

        let wordList = JSON.parse(localStorage.getItem("wordList")) || [];
        wordList = [newWord, ...wordList];
        localStorage.setItem("wordList", JSON.stringify(wordList));

        sendResponse({ response: `${data[0].fl}: ${data[0].shortdef[0]}` });
      })
      .catch(error => sendResponse({ response: "Oops! can't fetch" }));
  }
  return true;
});

getWords = () => {
  return JSON.parse(localStorage.getItem("wordList"));
};
