let backdrop = document.querySelector(".backdrop");
let hamburgerMenu = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");
let aboutScroll = document.getElementById("contact");

backdrop.addEventListener("click", function () {
  mobileNav.style.display = "none";
  closeModal();
});

function closeModal() {
  backdrop.style.display = "none";
}

hamburgerMenu.addEventListener("click", function () {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});

console.log(aboutScroll);
aboutScroll.scrollIntoView({
  behavior: "smooth"
});