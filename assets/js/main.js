/*=============== navbar ===============*/
window.addEventListener("scroll", () => {
 var header = document.querySelector("header");
 header.classList.toggle("sticky", window.scrollY > 0);
});

/*=============== toggleMenu ===============*/
let links = document.querySelectorAll(".nav li");
links.forEach((link) => {
 link.addEventListener("click", () => {
  toggleMenu();
 });
});
function toggleMenu() {
 const toggleMenu = document.querySelector(".toggleMenu");
 const header = document.querySelector("header");
 toggleMenu.classList.toggle("active");
 header.classList.toggle("active");
}
/*=============== scroll animation ===============*/
// window.addEventListener("scroll", () => {
//  var animex = document.querySelectorAll(".animeX");
//  for (let i = 0; i < animex.length; i++) {
//   let windowHeight = window.innerHeight;
//   let animeTop = animex[i].getBoundingClientRect().top;
//   let animPoint = 100;
//   if (animeTop < windowHeight - animPoint) {
//    animex[i].classList.add("active");
//   } else {
//    animex[i].classList.remove("active");
//   }
//  }
//  var animeY = document.querySelectorAll(".animeY");
//  for (let i = 0; i < animeY.length; i++) {
//   let windowHeight = window.innerHeight;
//   let animeTop = animeY[i].getBoundingClientRect().top;
//   let animPoint = 50;
//   if (animeTop < windowHeight - animPoint) {
//    animeY[i].classList.add("active");
//   } else {
//    animeY[i].classList.remove("active");
//   }
//  }
// });

/*=============== active link when scroll ===============*/
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
 const scrollY = window.pageYOffset;
 sections.forEach((current) => {
  const sectionHeight = current.offsetHeight,
   sectionTop = current.offsetTop - 58,
   sectionId = current.getAttribute("id");
  if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
   document
    .querySelector(".nav a[href*=" + sectionId + "]")
    .classList.add("active");
  } else {
   document
    .querySelector(".nav a[href*=" + sectionId + "]")
    .classList.remove("active");
  }
 });
}
window.addEventListener("scroll", scrollActive);

/*=============== themes ===============*/
let themeBtn = document.querySelector(".theme");
function getTheme() {
 let theme = localStorage.getItem("theme");
 if (!theme) {
  theme = "dark";
 }
 if (theme == "dark") {
  document.body.classList.remove("light-theme");
  themeBtn.querySelector("i").classList.add("fa-sun");
  themeBtn.querySelector("i").classList.remove("fa-moon");
  document.querySelector(".contact_img").src = "assets/img/contact_dark.png";
 }
 if (theme == "light") {
  document.body.classList.add("light-theme");
  themeBtn.querySelector("i").classList.add("fa-moon");
  themeBtn.querySelector("i").classList.remove("fa-sun");
  document.querySelector(".contact_img").src = "assets/img/contact_light.png";
 }
}
getTheme();
themeBtn.addEventListener("click", () => {
 let selectedTheme = localStorage.getItem("theme");
 if (!selectedTheme) {
  selectedTheme = "dark";
 }
 if (selectedTheme == "light") {
  localStorage.setItem("theme", "dark");
  getTheme();
 }
 if (selectedTheme == "dark") {
  localStorage.setItem("theme", "light");
  getTheme();
 }
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
 const scrollUp = document.querySelector(".scrollup");
 if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
 else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
 origin: "top",
 distance: "70px",
 duration: 2500,
 delay: 400,
});

sr.reveal(`.home_content`);
sr.reveal(`.home_img`, { delay: 500 });
sr.reveal(`.section_header`, { delay: 200, origin: "left" });
sr.reveal(`.games_filter`, { origin: "right" });
sr.reveal(`.about_img, .contact_form`, { origin: "left" });
sr.reveal(`.about_contentBox, .contact_img`, { origin: "right" });
sr.reveal(`.games_card, .tournaments_box `, {
 interval: 100,
});
