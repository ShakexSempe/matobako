// VARIABLES
const navList = document.querySelector('.nav-list');
const body = document.getElementById("container");
const date = document.getElementById("date");
const toggle = document.getElementById("toggle");
const navItem = document.querySelectorAll(".nav-link");
const infoBtn = document.querySelectorAll(".info-btn");
const infoSection = document.querySelector('.info-section');
console.log(navItem);
// date
date.innerHTML = new Date().getFullYear();

// hamburger
toggle.addEventListener("click", () => {

    navList.classList.toggle("active");
    toggle.classList.toggle("active");
    body.classList.toggle("dim");
});

// nav items 
navItem.forEach(item => {
    item.addEventListener("click", () => {
        navList.classList.remove("active");
        toggle.classList.remove("active");
        body.classList.remove("dim");

    })
});