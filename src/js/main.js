import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// code pour le scroll horizontal de la première partie du site

gsap.to(".horizontal-scroll", {
  x: () =>
    -(
      document.querySelector(".horizontal-scroll").scrollWidth -
      window.innerWidth
    ) + "px",
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll-container",
    start: "top top",
    end: () =>
      "+=" +
      (document.querySelector(".horizontal-scroll").scrollWidth -
        window.innerWidth),
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

// animation de Isa qui dit Stop

gsap.to(".stop-move", {
  scrollTrigger: {
    trigger: ".stop-move",
    start: "2500px center",
    scrub: true,
  },
  left: 0,
});

// animation de l'épée qui tombe

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".sister-sword",
      start: "3300px center",
      end: "3301px center",
      scrub: 0.1,
    },
  })
  .to(".sister-sword", {
    scale: 1,
    right: -280,
    top: "118vh",
  })
  .to(".sister-sword", {
    scale: 0.3,
  });

// parallax des piliers

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".header-section-2",
      start: "top top",
      scrub: 1,
    },
  })
  .to(".pillar-section-2", {
    x: -250,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".header-section-3",
      start: "1200px top",
      end: "2000px top",
      scrub: 1,
    },
  })
  .to(".pillar-section-3", {
    x: -250,
  });

// parallax de la section castle

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".castle-section",
      start: "top top",
      end: "4000px bottom",
      scrub: 0.3,
      pin: true,
    },
  })
  .to(
    ".castle-background",
    {
      y: -800,
    },
    0
  )
  .to(
    ".castle-middleground",
    {
      y: "-300vh",
    },
    0
  )
  .to(
    ".castle-foreground",
    {
      y: "-160vh",
    },
    0
  )
  .to(
    ".bubble-fracture",
    {
      y: "-180vh",
    },
    0
  );

// animation de la bulle de l'épée qui va en haut et en bas

gsap
  .timeline()
  .to(".bubble-climax", {
    y: 0,
    repeat: -1,
    yoyo: true,
  })
  .to(".bubble-climax", {
    y: -15,
    repeat: -1,
    yoyo: true,
  });

// fonction pour pouvoir clicker sur l'épée ou la bulle de l'épée pour acceder
// à la boutique

const swordCta = document.querySelector(".bubble-climax");
const swordCta2 = document.querySelector(".cta-sword");
const goShop = document.querySelector(".end-section");

swordCta.addEventListener("click", function () {
  goShop.classList.add("active");
  shopShort.classList.add("hide");
  goStart.classList.remove("hide");
});

swordCta2.addEventListener("click", function () {
  goShop.classList.add("active");
  shopShort.classList.add("hide");
  goStart.classList.remove("hide");
});

// bouton de racourci vers le shop ou le début du site. le but est que le go
// start ne soit affiché que quand on est a la boutique et que le go boutique
// seulement quand on es pas à la boutique

const shopShort = document.querySelector(".cta-shop");
const goStart = document.querySelector(".cta-start");

shopShort.addEventListener("click", function () {
  goShop.classList.add("active");
  goStart.classList.toggle("hide");
  shopShort.classList.toggle("hide");
});

goStart.addEventListener("click", function () {
  shopShort.classList.remove("hide");
  goStart.classList.add("hide");
  goShop.classList.remove("active");
});

// animation de la personne dans le tonneau

const ctaBarrel = document.querySelector(".cta-barrel");

// gsap
//   .timeline()
//   .to(".barrel-head", {
//     y: 0,
//     yoyo: true,
//     repeat: -1,
//     duration: 4,
//   })
//   .to(".barrel-head", {
//     y: -55,
//     yoyo: true,
//     repeat: -1,
//     duration: 4,
//   });

ctaBarrel.addEventListener("mouseenter", function () {
  gsap.to(".barrel-head", {
    y: -55,
    duration: 0.5,
  });
});

ctaBarrel.addEventListener("mouseleave", function () {
  gsap.to(".barrel-head", {
    y: 0,
    duration: 2,
  });
});
