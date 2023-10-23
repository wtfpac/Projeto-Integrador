document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menuDropdown = document.querySelector(".menu-dropdown");

    menuIcon.addEventListener("click", function () {
        // Alterne a exibição do menu suspenso
        menuDropdown.classList.toggle("show-menu-dropdown");
    });
});