// Navbar
const selectElement = (element) => document.querySelector(element);
selectElement('.mobile-menu').addEventListener('click', () => {
selectElement('header').classList.toggle('active');
});
//Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  // var swiper = new Swiper(".mySwiper", {
  //   speed: 600,
  //   parallax: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  // });