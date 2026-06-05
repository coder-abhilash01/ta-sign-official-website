import React, { useEffect, useRef, useState } from "react";
import { X, CircleChevronUp, MoveRight } from "lucide-react";
import gsap from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // 🚀 Isko explicitly register karenge

gsap.registerPlugin(ScrollTrigger);

const FranchisePopup = () => {
  const [open, setOpen] = useState(false);
  const [showSlip, setShowSlip] = useState(false);
  const buttonRef = useRef(null);

  const STORAGE_KEY = "ta_sign_franchise_popup";

  useEffect(() => {
    const savedTime = Number(localStorage.getItem(STORAGE_KEY));

    if (savedTime && Date.now() < savedTime) {
      setShowSlip(true);
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
  if (!buttonRef.current) return;

  // Shuruat mein button visible rahega
  gsap.set(buttonRef.current, { 
    opacity: 1, 
    scale: 1, 
    pointerEvents: "auto" 
  });

  // Pure JavaScript window scroll trigger setup (Hacker Proof)
  const handleScrollHide = () => {
    if (!buttonRef.current) return;

    // Poore page ki total vertical height
    const totalPageHeight = document.documentElement.scrollHeight;
    // User abhi screen par kitna niche hai (Viewport top + Window height)
    const currentScrollPosition = window.scrollY + window.innerHeight;

    // 🔥 LOGIC: Agar user page ke bilkul bottom se 450px ke paas pahunch gaya hai (Footer Area)
    // Toh button ko smoothly fade out kar do
    if (totalPageHeight - currentScrollPosition < 450) {
      gsap.to(buttonRef.current, {
        opacity: 0,
        scale: 0.5,
        pointerEvents: "none",
        duration: 0.3,
        overwrite: "auto", // Purani animations ko overwrite karega taaki glitch na ho
        ease: "power2.inOut"
      });
    } else {
      // Wapas upar aane par button ko smoothly display par le aao
      gsap.to(buttonRef.current, {
        opacity: 1,
        scale: 1,
        pointerEvents: "auto",
        duration: 0.3,
        overwrite: "auto",
        ease: "power2.inOut"
      });
    }
  };

  // Browser scroll listener ko attach kiya
  window.addEventListener("scroll", handleScrollHide);

  // Cleanup: Jab component band ho toh event listener ko delete karein memory leak se bachne ke liye
  return () => {
    window.removeEventListener("scroll", handleScrollHide);
  };
}, { dependencies: [open, showSlip], scope: buttonRef });
  const closePopup = () => {
    const nextShowTime = Date.now() + 15 * 60 * 1000; // 15 min testing

    localStorage.setItem(STORAGE_KEY, nextShowTime.toString());

    setOpen(false);
    setShowSlip(true);
  };

  return (
    <>
      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-md p-4 font-[Montserrat]">
          <div className="relative w-full max-w-[500px] overflow-hidden rounded-sm bg-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] animate-in fade-in zoom-in-95 duration-300">
            {/* Close */}
            <button
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm hover:bg-neutral-100 transition cursor-pointer hover:scale-110 active:scale-95"
            >
              <X size={16} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src="/hero-section-imgs/partner-pop-up-img.png"
                alt="Partner Program"
                className="sm:h-52 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <div className="absolute left-5 bottom-5 rounded-2xl bg-white px-4 py-3 shadow-xl">
                <p className="text-[11px] uppercase tracking-wider text-neutral-500">
                  Earn Up To
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-3xl font-bold text-blue-600">50%</span>
                  <span className="mb-1 text-sm text-neutral-500">Commission</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                Become a Dsc Partner
              </div>

              <h2 className="mt-4 text-2xl sm:text-[28px] font-bold leading-tight tracking-tight text-neutral-900">
                Start Your DSC Business Today
              </h2>

              <p className="mt-3 text-sm sm:leading-6 text-neutral-500">
                Join Tiwari Associates and earn assured commission on every successful DSC sale with dedicated support from our expert team.
              </p>

              {/* Benefits */}
              <div className="mt-5 sm:mt-6 gap-y-3 grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-sm">Zero investment required</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-sm">Instant DSC approvals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-blue-600" />
                  <span className="text-sm">Dedicated support from team</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer"
                className="mt-5 sm:mt-7 group flex w-full items-center justify-center gap-2 rounded-md bg-blue-800 px-5 py-4 font-medium text-white transition-all hover:bg-blue-700 cursor-pointer"
              >
                Become Partner
                <MoveRight size={18} className="transition group-hover:translate-x-1 mt-1" />
              </a>

              <p className="mt-4 text-center text-xs text-neutral-400 tracking-wide">
                Trusted by CAs, Advocates & Tax Consultants
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FIXED SLIP BUTTON */}
      {showSlip && !open && (
        <button
          ref={buttonRef}
          onClick={() => setOpen(true)}
          className="fixed bottom-4 left-4 z-[400] bg-blue-600 text-white rounded-md px-5 py-4 shadow-xl hover:scale-105 transition"
        >
          <div className="relative text-left">
            <CircleChevronUp
              size={20}
              className="absolute -top-6 -right-1 rounded-full text-white bg-blue-700/50 backdrop-blur-3xl cursor-pointer hover:text-black hover:bg-white/40 transition-all duration-300"
            />
            <p className="text-sm font-medium">Become A Partner</p>
            <p className="text-xs text-white/80">Earn up to 50% Cashback</p>
          </div>
        </button>
      )}
    </>
  );
};

export default FranchisePopup;