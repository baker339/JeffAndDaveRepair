const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindeex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabIndex", -1);

    // if the right key is pushed
    if (e.keyCode === keydownRight) {
      tabFocus++;
      tabFocus = tabFocus >= tabs.length ? 0 : tabFocus;
    }

    // if the left key is pushed
    else if (e.keyCode === keydownLeft) {
      tabFocus--;
      tabFocus = tabFocus == -1 ? tabs.length - 1 : tabFocus;
    }

    tabs[tabFocus].setAttribute("tabIndex", 0);
    tabs[tabFocus].focus();
  }
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const targetImage = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;

  // select the correct tab
  selectTab(tabContainer, targetTab);

  // set the tab panel to show correct data
  hideContent(mainContainer, '[role="tabpanel"');
  showContent(mainContainer, targetPanel);

  // set to the correct image
  hideContent(mainContainer, "picture");
  showContent(mainContainer, targetImage);
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach((item) => {
    item.setAttribute("hidden", true);
  });
}

function showContent(parent, target) {
  parent.querySelector([`#${target}`]).removeAttribute("hidden");
}

function selectTab(parent, target) {
  parent
    .querySelector('[aria-selected="true"')
    .setAttribute("aria-selected", false);

  target.setAttribute("aria-selected", true);
}
