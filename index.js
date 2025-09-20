//toggle hamburger menu visibility
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const menuLinks = document.querySelectorAll("#nav-links a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); //switching the icons between open-closed state
});

//Close menu when cli on menu link
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
  navLinks.classList.remove("active");
  hamburger.classList.remove("active");
  })
})

//close menu when clicked outside of menu
document.addEventListener("click", (event) => {
  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});