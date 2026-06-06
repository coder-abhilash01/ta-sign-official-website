import React from "react";

const certificates = [
  "/certificates/certificate.jpeg",
  "/certificates/certificate1.png",

  "/certificates/certificate3.png",


];

const size = [
  "h-[200px] md:h-[260px] md:w-[340px] w-[280px]",
  " h-[200px] md:h-[260px] md:w-[180px] w-[150px]",
  " h-[200px] md:h-[260px] md:w-[210px] w-[160px]",

  
];

const Carousel = () => {
  return (
    <section className="w-full mx-auto pt-6 bg-[#FCFCFC] overflow-hidden pb-10">

      {/* TOP */}

      <div className="max-w-7xl mx-auto px-6 mb-14">

        <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium mb-4">
          Certifications
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-black">
          Trusted & Verified
        </h2>

      </div>

    

      <div className="relative w-[95vw] mx-auto overflow-hidden">

        

        <div className="absolute left-0 top-0 w-0 md:w-32 h-full bg-gradient-to-r from-[#f8f8f8] to-transparent z-10 opacity-60" />

    

        <div className="absolute right-0 top-0 w-0 md:w-32 h-full bg-gradient-to-l from-[#f8f8f8] to-transparent z-10 opacity-60" />

        {/* TRACK */}

        <div className="flex w-max animate-marquee gap-8 px-4 items-center">

          {[...certificates, ...certificates, ...certificates].map((item, index) => (
            <div
              key={index}
              className=" h-fit
              bg-white  p-4 
              border border-gray-200
              hover:-translate-y-2 transition duration-500
              shadow-sm hover:shadow-2xl "
            >

              <div className="overflow-hidden">
                <img
                  src={item}
                  alt="certificate"
                  className={` ${size[index % size.length]} object-cover hover:scale-105 transition duration-700`}
                />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;