const sidebarToggle = document.getElementsByClassName("sidebar-toggle")[0];
const toggleOpenIcon = sidebarToggle.firstElementChild;
const toggleCloseIcon = sidebarToggle.lastElementChild;
const sidebar = document.getElementsByClassName("sidebar")[0];

/**
 * on resize window event handler
 */
window.onresize = function () {
  if (window.innerWidth > 767) {
    setStyle(toggleOpenIcon, "block");
    setStyle(toggleCloseIcon, "none");
  } else {
    if (!sidebar.classList.contains("hidden")) {
      setStyle(toggleOpenIcon, "none");
      setStyle(toggleCloseIcon, "block");
    }
  }
};

/**
 * toggle menu open and close
 * @param {*} element toggle element
 * @param {*} style display style
 */
function setStyle(element, style) {
  element.style.display = style;
}

sidebarToggle.addEventListener("click", function () {
  if (window.innerWidth <= 767) {
    sidebar.classList.toggle("hidden");

    if (sidebar.classList.contains("hidden")) {
      sidebar.classList.remove("animate-left");
      sidebarToggle.style.transform = "rotate(0deg)";
      setStyle(toggleOpenIcon, "block");
      setStyle(toggleCloseIcon, "none");
    } else {
      sidebar.classList.add("animate-left");
      sidebarToggle.style.transform = "rotate(360deg)";
      setStyle(toggleOpenIcon, "none");
      setStyle(toggleCloseIcon, "block");
    }
  }
});

const dropdownMenu = document.getElementsByClassName("dropdown-menu");
const singleMenu = document.getElementsByClassName("single-menu");

/**
 * close all dropdown menu and single menu
 * @param {*} menu is the menu element
 */
function closeAnotherMenu(menu) {
  for (let index = 0; index < singleMenu.length; index++) {
    const element = singleMenu[index];
    if (element !== menu) element.classList.remove("active");
  }

  for (let index = 0; index < dropdownMenu.length; index++) {
    if (dropdownMenu[index] !== menu) {
      dropdownMenu[index].classList.remove("active");
      dropdownMenu[index].nextElementSibling.classList.add("hidden");
      dropdownMenu[index].getElementsByClassName(
        "dropdown-icon"
      )[0].style.transform = "rotate(0deg)";
    }
  }
}

for (let index = 0; index < singleMenu.length; index++) {
  const el = singleMenu[index];
  el.addEventListener("click", function () {
    this.classList.contains("active") === false && this.classList.add("active");

    closeAnotherMenu(this);
  });
}

for (let index = 0; index < dropdownMenu.length; index++) {
  const el = dropdownMenu[index];
  el.addEventListener("click", function () {
    const dropdown = this.nextElementSibling;
    const rotateSvg = this.getElementsByClassName("dropdown-icon")[0];

    dropdown.classList.toggle("hidden");
    if (dropdown.classList.contains("hidden")) {
      rotateSvg.style.transform = "rotate(0deg)";
      this.classList.remove("active");
    } else {
      rotateSvg.style.transform = "rotate(180deg)";
      this.classList.add("active");
    }

    closeAnotherMenu(this);
  });
}

