import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const letters = gsap.utils.toArray(".loader-letter");

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1.2,
          ease: "power4.inOut",
          delay: 0.2,
          onComplete: onComplete,
        });
      },
    });

    // Initial state
    gsap.set(letters, {
      rotateY: 90,
      y : -90,
      transformOrigin: "right center",
      transformStyle: "preserve-3d",
    });

    // Flip reveal animation

    // tl.to(letters, {
    //   y:0,
    //   duration: 1.4,
    //   stagger: 0.08,
    //   ease: "power4.out",
    // });

    // tl.to(letters, {
    //   rotateY: 0,
    //   duration: 1.4,
    //   stagger: 0.08,
    //   ease: "power4.out",
    // });

    // Slight scale settle
    tl.fromTo(
      ".loader-text",
      {
        scale: 0.96,
      },
      {
        scale: 1,
        duration: 1,
        ease: "expo.out",
      },
      0
    );

    // Fade lower text
    tl.fromTo(
      ".loader-sub",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    );

    tl.from(".logo", {
      opacity: 0,
      
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.6");
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-white text-black overflow-hidden"
    >
     

      <div
        className="w-full h-full flex flex-col items-center justify-center"
        style={{
          perspective: "1400px",
        }}
      >
       
<img src="/logo.png" alt="logo" className='logo h-40 md:h-60  object-cover mt-4 ' />
        
        <div className="loader-sub   overflow-hidden">
          <p className="text-[14px] text-center md:text-sm uppercase tracking-[0.35em] text-black/70 font-medium">
            Digital Signature & Compliance Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;