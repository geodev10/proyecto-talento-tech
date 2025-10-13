const swiperProductos = new Swiper(".swiper-productos", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  },
});

const swiperTestimonios = new Swiper(".swiper-testimonios", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    992: { slidesPerView: 4 },
  },
});

const swiperTestimoniosMobile = new Swiper(".swiper-testimonios-mobile", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});

const swiperBanner = new Swiper(".swiper-banner", {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: "fade",
  speed: 3000,
});
