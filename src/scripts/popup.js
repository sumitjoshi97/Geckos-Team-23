const dashboardBtn = document.getElementById("dashboard-btn");
dashboardBtn.onclick = function() {
  chrome.tabs.create({ url: "chrome://newtab" });
};
