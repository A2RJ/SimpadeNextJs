const menu = document.getElementsByClassName("dropdown-menu");

for (let index = 0; index < menu.length; index++) {
  menu[index].addEventListener("click", function () {
    const child = menu[index].children[1];
    const svg = menu[index].children[0].children[2];

    child.classList.toggle("hidden");

    if (child.classList.contains("hidden")) {
      svg.classList.add("rotateOut");
      svg.classList.remove("rotateIn");
    } else {
      svg.classList.add("rotateIn");
      svg.classList.remove("rotateOut");
    }

    menu[index].classList.toggle("active");
    for (let index2 = 0; index2 < menu.length; index2++) {
      if (index !== index2) {
        menu[index2].classList.remove("active");
        menu[index2].children[1].classList.add("hidden");
        menu[index2].children[0].children[2].classList.add("rotateOut");
      }
    }
  });
}

const sidebarToggle = document.getElementsByClassName("sidebar-toggle")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];
sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("hidden");
  // if (window.innerWidth < 800) {
  // }
});
