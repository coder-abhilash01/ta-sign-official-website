import Lenis from "@studio-freight/lenis";


export const lenis = new Lenis({
  duration: 1.1,
  smooth: true,
  smoothTouch: false,
  easing: (t) => 1 - Math.pow(1 - t, 3),
});