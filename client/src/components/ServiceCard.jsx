import React from "react";

const ServiceCard = ({
  className,
  active,
  price,
  title,
  features,
  cta,
}) => {
  return (
    
    <div
     
      className={`service-card
         min-w-60 h-90 md:w-65  md:h-110 bg-white border border-black/40
        shadow shadow-black/20 rounded-tl-[70px] rounded-br-[70px]
        pt-16 px-6
        transition-all duration-300 ease-in-out
        hover:z-50 hover:rotate-0 hover:scale-105
        hover:blur-none
        ${className} cursor-pointer
      `}
    >
      {/* Price */}
      <div className="text-sm font-semibold text-blue-600 mb-2 price ">
        {price}
      </div>
<img src="/partner-logos/isoLogo.png" className=" aspect-4/3 w-25 object-cover"/>
      {/* Title */}
      <h3 className="text-xl font-semibold mb-4 text-center text-black">
        {title}
      </h3>

      {/* Features */}
      <ul className="md:space-y-2 text-sm text-black/80">
        {features.map((item, i) => (
          <li key={i}>✔ {item}</li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className=" button"
        
      >
        {cta}
      </button>
    </div>
  );
};

export default ServiceCard;
