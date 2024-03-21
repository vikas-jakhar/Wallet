const searchicon = document.querySelector(".search-icon");
const searchbox = document.querySelector(".search-box");

searchicon.addEventListener("click", function () {
    searchbox.classList.toggle("show1")
});

const menuicon = document.querySelector(".menu-icon");
const menulist = document.querySelector(".menu-list");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show1")
});

const heart = document.querySelectorAll(".heart");

heart.forEach(function (e) {
    e.addEventListener("click", function () {
        e.classList.toggle("red")
    });
});
