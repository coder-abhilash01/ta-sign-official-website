import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const logo = useRef(null);

  useGSAP(() => {
    // 1. Initial setup: Logo ko shuruat mein thoda niche aur transparent rakhein
    gsap.set([logo.current, ".loader-sub"], {
      opacity: 0,
      y: 40,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // Jab sab khatam ho jaye, tab container ko slide-up karke off-screen karein
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    // 2. Curtains ka exit transition start hoga
    tl.to(".wrap", {
      scaleY: 0,
      transformOrigin: "bottom",
      stagger: 0.18,
      duration: 1,
      ease: "power3.inOut",
    }, "+=0.4"); // Shuruat mein halka sa hold static look ke liye

    // 3. 💥 CONNECTED STEP: Jaise hi curtains shrink hona SHURU hon (`<`), 
    // waise hi peeche se logo aur text upar reveal hone lgenge
    tl.to([logo.current, ".loader-sub"], {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    }, "<+=0.9"); // Curtains ke khulne ke exact 0.2s baad logo smooth entry lega

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-white text-black overflow-hidden select-none"
    >
      {/* BACKGROUND CURTAIN LAYER */}
      <div className="absolute inset-0 w-full h-screen grid grid-cols-4 z-10 pointer-events-none">
        <div className="wrap bg-slate-900 border-r border-white/5" />
        <div className="wrap bg-slate-900 border-r border-white/5" />
        <div className="wrap bg-slate-900 border-r border-white/5" />
        <div className="wrap bg-slate-900" />
      </div>

      {/* FOREGROUND BRANDING LAYER */}
      <div
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-20 pointer-events-none"
        style={{ perspective: "1400px" }}
      >
        <div className="overflow-hidden py-2">
          <img
            src="/logo.png"
            ref={logo}
            alt="logo"
            className="h-20 md:h-24 object-contain mb-4 will-change-transform"
          />
        </div>

        <div className="loader-sub overflow-hidden px-4">
          <p className="text-[12px] text-center md:text-sm uppercase tracking-[0.35em] text-black/80 font-medium">
            Digital Signature & Compliance Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;