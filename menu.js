const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
    [].forEach.call(line, function (el) {
        el.classList.toggle("white");
    });

});