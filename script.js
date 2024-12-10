document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("menu");

  if (menu && menuToggle) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("show");

      if (menu.classList.contains("show")) {
        menuToggle.innerHTML = "&times;";
      } else {
        menuToggle.innerHTML = "&#9776;";
      }
    });

    menuToggle.innerHTML = "&#9776;";
  }
});
