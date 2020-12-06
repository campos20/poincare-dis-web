import addPoint from "./function/add.point.js";
import addLine from "./function/add.line.js";
import select from "./function/select.js";

const SELECTED_ITEM = "selected-item";

class NavItem {
  constructor(name, icon, action) {
    this.name = name;
    this.icon = icon;
    this.action = action;
  }
}

const navItems = [
  new NavItem("select", "fal fa-mouse-pointer", select),
  new NavItem("point", "far fa-circle", addPoint),
  new NavItem("line", "far fa-horizontal-rule", addLine),
];

let selectedItem = 0;

// A function that will be performed. User selects an item in the menu, then click in the screen.
export const selectedAction = { action: null, name: null };

export default function drawNavbar() {
  let navbar = document.getElementById("navbar");

  let spans = navItems.map((item) => {
    let span = document.createElement("span");
    span.className = item.icon;
    return span;
  });

  spans.forEach((span, i) => {
    span.addEventListener("click", function () {
      if (selectedItem != null) {
        spans[selectedItem].classList.remove(SELECTED_ITEM);
      }

      if (selectedItem === i) {
        selectedItem = null;
        selectedAction.action = null;
        selectedAction.name = null;
      } else {
        spans[i].classList.add(SELECTED_ITEM);
        selectedItem = i;
        selectedAction.action = navItems[i].action;
        selectedAction.name = navItems[i].name;
      }
    });
    navbar.appendChild(span);
  });
}
