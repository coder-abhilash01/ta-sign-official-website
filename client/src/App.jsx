import Navbar from "./components/Navbar"
import MainRoutes from "./routes/MainRoutes"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useState } from "react";
import Loader from "./components/Loader";
import { useGSAP } from "@gsap/react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import FranchisePopup from "./components/FranchisePopup";
import { lenis } from "./components/utils/lenis";

gsap.registerPlugin(ScrollTrigger);

const app = () =>{

  const [isLoading, setIsLoading] = useState(true);

   useGSAP(() => {
  if (window.innerWidth < 768) return;

  lenis.on("scroll", ScrollTrigger.update);

  let rafId;

  function raf(time) {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  }

  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
  };
}, []);
  return <div  className="w-full backface-visible">
<ScrollToTop/>
    
      {isLoading && (
        <Loader onComplete={() => setIsLoading(false)} />
      )}

      <FranchisePopup/>
    <Navbar/>
    <MainRoutes/>
    <Footer/>
  </div>
}

export default app