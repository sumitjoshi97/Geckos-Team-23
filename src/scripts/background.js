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
        sendResponse({ response: data[0].shortdef[0] });
      })
      .catch(error => sendResponse({ response: "Oops! can't fetch" }));
  }
  return true;
});
