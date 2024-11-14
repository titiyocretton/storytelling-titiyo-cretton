import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
      markers: true,
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
