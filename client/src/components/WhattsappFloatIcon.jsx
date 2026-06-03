import React, { useEffect, useState } from 'react'

const WhattsappFloatIcon = () => {
      const [index, setIndex] = useState(0);
    
      const texts = [
        "Hi, chat with us",
        "Need help?",
        "We reply fast",
      ];

      useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
     <a
        href={`https://wa.me/919306746685?text=${encodeURIComponent("Hi, I want to buy DSC")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed right-4 bottom-6 z-50 flex flex-col items-center gap-1"
      >
        <div className="relative">
          <img src="/whatsapp-logo.png" className="w-14 sm:w-16" />

          <span className=" absolute -top-[2px] -right-[2px] w-4 h-4 bg-red-500
      text-white text-[10px] rounded-full flex items-center justify-center
    ">
            1    </span>
        </div>

        <span className="text-xs sm:text-sm bg-black text-white
          px-3 py-1 rounded-t-full rounded-bl-full shadow-lg">
          {texts[index]}
        </span>

      </a>
  )
}

export default WhattsappFloatIcon
