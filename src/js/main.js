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
    start: "2500px center", // effectue l'animation quand le centre de la hauteur se retrouve à 2500px du haut de la page
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
// j'ai animé les deux pilier séparément parce que j'avais des probleme pour le
// déclenchement et la fin de l'animation. je pense que y'avais une solution plus courte mais je l'ai pas trouvée

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".header-section-2",
      start: "top top", // l'animation débute tout de suite
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
      start: "1200px top", // l'animation est décalée et se fera plus loin
      end: "2000px top",
      scrub: 1,
    },
  })
  .to(".pillar-section-3", {
    x: -250,
  });

// parallax de la section castle
// le vh n'est pas idéale pour le redimension de la page mais mieux que les px
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".castle-section",
      start: "top top",
      end: "4000px bottom",
      scrub: 0.3, //le chiffre donne un effet plus lisse à l'animation
      pin: true,
    },
  })
  .to(
    ".castle-background",
    {
      y: "-1220px",
    },
    0
  )
  .to(
    ".castle-middleground",
    {
      y: "-400vh",
    },
    0
  )
  .from(
    ".castle-foreground",
    {
      y: "100vh",
    },
    0
  )
  .to(
    ".bubble-fracture",
    {
      y: "-180vh",
    },
    0
  )
  .to(
    ".castle-bubble-king",
    {
      y: 700,
    },
    0
  )
  .to(
    ".castle-img-cumbe",
    {
      marginTop: 400,
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

//répétition de la fonction, c'est pas l'idéal mais j'ai oublié comment l'appeler

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

// animation de la personne dans le tonneaux

const ctaBarrel = document.querySelector(".cta-barrel");
const headBarrel = document.querySelector(".barrel-head");

ctaBarrel.addEventListener("mouseenter", function () {
  headBarrel.classList.add("barrel-active");
});

ctaBarrel.addEventListener("mouseleave", function () {
  headBarrel.classList.remove("barrel-active");
});
