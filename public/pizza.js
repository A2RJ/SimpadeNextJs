const menu = document.getElementsByClassName("dropdown-menu");

for (let index = 0; index < menu.length; index++) {
  menu[index].addEventListener("click", function (event) {
    event.preventDefault();
    const parent = event.target.children[0];
    if (parent && parent.classList.contains("dropdown-item-parent")) {
      parent.classList.toggle("hidden");
    }
  });
}
