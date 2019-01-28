const dashboardBtn = document.getElementById("dashboard-btn");

dashboardBtn.onclick = function() {
  if (chrome) {
    chrome.tabs.create({ url: "chrome://newtab" });
  } else {
    browser.tabs.create({ url: "about:newtab" });
  }
};
