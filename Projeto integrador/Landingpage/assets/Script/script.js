document.addEventListener("DOMContentLoaded", function () {
    const whatsappPopup = document.querySelector(".whatsapp-popup");

    whatsappPopup.style.display = "none";  
    whatsappPopup.addEventListener("click", function () {
        window.location.href = "https://wa.me/5545999430154";
    });

    setTimeout(function () {
        whatsappPopup.style.display = "block";
    }, 2000);  
});
