const scrollRevealOpton = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}

ScrollReveal().reveal(".hero_left",{
 ...scrollRevealOpton,
 origin:"left",
});

ScrollReveal().reveal(".hero_img-container img",{
  ...scrollRevealOpton,
  delay:500,
 });
 
 ScrollReveal().reveal(".box_1",{
  ...scrollRevealOpton,
  delay: 700,
 });
 ScrollReveal().reveal(".box_2",{
  ...scrollRevealOpton,
  delay: 900,
 });
 ScrollReveal().reveal(".blue-line",{
  ...scrollRevealOpton,
  origin:"right",
 });
 ScrollReveal().reveal(".section-category-text",{
  ...scrollRevealOpton,
 origin:"right",
 });
 ScrollReveal().reveal(".section-title",{
  ...scrollRevealOpton,
  delay:1000,
 });
 ScrollReveal().reveal(".slideshow-button",{
  ...scrollRevealOpton,
  origin:"right",
 });
 
 ScrollReveal().reveal(".product-card",{
  ...scrollRevealOpton,
  delay:1500,
 });
 ScrollReveal().reveal(".about",{
  ...scrollRevealOpton,
  origin:"bottom",
 });
 
 //Menu Bar
 let menuBar = document.querySelector('#menu-bar');
 let menuPage = document.querySelector('#menu-page');
 let html = document.querySelector('html');

 //show and hide menu bar
 menuBar.addEventListener('click', () => {
    menuPage.classList.toggle('active');

    if (menuPage.classList.contains('active')){
      html.style.overflow = "hidden"
    }
    else {
      html.style.overflow = "scroll"
    }
 })