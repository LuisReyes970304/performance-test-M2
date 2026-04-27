const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 

const menuToogle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav__list");

menuToogle.addEventListener("click", () => {
    navList.classList.toggle("show");
});