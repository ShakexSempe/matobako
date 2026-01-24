// VARIABLES
const nav = document.querySelector('.nav');
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

// ********** MAIN SECTION INTERSECTION OBSERVER ************
const main = document.getElementById('main');
const mainOptions = {
    rootMargin: "0px 0px -10% 0px"
};

const mainObserver = new IntersectionObserver(
  function(
      entries, mainObserver
  ) {
      entries.forEach(entry => {
          if(!entry.isIntersecting) {
              console.log("MAIN NOT IO");
              nav.classList.add("header-io");
              //   header.style.backgroundColor = "red";
            //   hamburger.classList.add("no-pulse");
            //   // topLink.classList.remove('show-link');
            //   progressBarStyle.classList.remove('active-bar');
            //   bottomNav.classList.remove("active-bottom-nav");
            
        } else {
              console.log("MAIN IS IO");
              nav.classList.remove("header-io");
            //   hamburger.classList.remove("no-pulse");
            //   progressBarStyle.classList.add('active-bar');
            //   // topLink.classList.add('show-link');
            //   bottomNav.classList.add("active-bottom-nav");
            
          }
      });
  }, mainOptions
);
mainObserver.observe(main);