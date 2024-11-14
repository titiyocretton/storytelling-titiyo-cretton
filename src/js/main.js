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

gsap.to(".stop-move", {
  scrollTrigger: {
    trigger: ".stop-move",
    start: "2500px center",
    markers: true,
    scrub: true,
  },
  left: 0,
});
