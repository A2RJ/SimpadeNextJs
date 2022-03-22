sideBar();
menu();

function sideBar() {
  const sidebarToggle = document.getElementsByClassName("sidebar-toggle")[0];
  const sidebar = document.getElementsByClassName("sidebar")[0];

  sidebarToggle.addEventListener("click", function () {
    if (window.innerWidth <= 767) {
      sidebar.classList.toggle("hidden");
    }
  });
}

function menu() {
  const dropdownMenu = document.getElementsByClassName("dropdown-menu");
  const singleMenu = document.getElementsByClassName("single-menu");

  for (let index = 0; index < singleMenu.length; index++) {
    const el = singleMenu[index];
    el.addEventListener("click", function () {
      this.classList.contains("active") === false &&
        this.classList.add("active");
      for (let index = 0; index < singleMenu.length; index++) {
        const element = singleMenu[index];
        if (element !== this) {
          element.classList.remove("active");
        }
      }
      closeAllMenu("dropdown-menu", dropdownMenu);
    });
  }

  for (let index = 0; index < dropdownMenu.length; index++) {
    const el = dropdownMenu[index];
    el.addEventListener("click", function () {
      const dropdown = this.nextElementSibling;
      const rotateSvg = this.getElementsByClassName("dropdown-icon")[0];

      dropdown.classList.toggle("hidden");
      dropdown.classList.contains("hidden")
        ? ((rotateSvg.style.transform = "rotate(0deg)"),
          this.classList.remove("active"))
        : ((rotateSvg.style.transform = "rotate(180deg)"),
          this.classList.add("active"));

      for (let index = 0; index < dropdownMenu.length; index++) {
        if (dropdownMenu[index] !== this) {
          dropdownMenu[index].classList.remove("active");
          dropdownMenu[index].nextElementSibling.classList.add("hidden");
          dropdownMenu[index].getElementsByClassName(
            "dropdown-icon"
          )[0].style.transform = "rotate(0deg)";
        }
      }
      closeAllMenu("single-menu", singleMenu);
    });
  }
}

function closeAllMenu(params, elements) {
  if (params === "dropdown-menu") {
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.classList.remove("active");
      element.nextElementSibling.classList.add("hidden");
      element.getElementsByClassName("dropdown-icon")[0].style.transform =
        "rotate(0deg)";
    }
  } else {
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      element.classList.remove("active");
    }
  }
}
