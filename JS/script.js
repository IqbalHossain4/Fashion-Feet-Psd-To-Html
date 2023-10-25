// Tab

function openTab(tabName) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("selectTab");
  }
  document.getElementById(tabName).classList.add("selectTab");

  var buttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selectTab");
  }
  document
    .querySelector("button[onclick=\"openTab('" + tabName + "')\"]")
    .classList.add("selectTab");
}

openTab("women");
