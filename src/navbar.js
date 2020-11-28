import addPoint from "./functions/add.point.js";

const SELECTED_ITEM = "selected-item";

const navItems = [
  { name: "Select", icon: "fal fa-mouse-pointer" },
  { name: "Point", icon: "far fa-circle", action: addPoint },
  { name: "Line", icon: "far fa-horizontal-rule" },
];

let selectedItem = 0;

// A function that will be performed. User selects an item in the menu, then click in the screen.
export const selectedAction = { action: null };

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
      } else {
        spans[i].classList.add(SELECTED_ITEM);
        selectedItem = i;
        selectedAction.action = navItems[i].action;
      }
    });
    navbar.appendChild(span);
  });
}
