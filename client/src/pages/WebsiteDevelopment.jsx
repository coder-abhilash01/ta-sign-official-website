import React from "react";
import { ArrowUpRight } from "lucide-react";


const items = [
  {
    number: "01",
    title: "UrbanVibe E-Commerce",
    image: "/projects/project1.jpeg",
    desc: "Designed to create a modern shopping experience with clear product discovery, responsive layouts and stronger brand perception.",
  },

  {
    number: "02",
    title: "Portfolio Website ",
    image: "/projects/project5.png",
    desc: "Focused on simplifying complex services through structured content, intuitive navigation and a more trustworthy digital presence.",
  },

  {
    number: "03",
    title: "Personal Portfolio",
    image: "/projects/project4.jpeg",
    desc: "A portfolio experience built around motion, visual storytelling and modern interaction design to showcase work effectively.",
  },
];


const WebsiteDevelopment = () => {
  return (
    <section className="py-10 w-full bg-[#f8f8f6] text-neutral-900  font-[Montserrat] ">
  <div className="w-full mx-auto px-6">

    <div className="grid lg:grid-cols-[1fr_600px] gap-20">



  <div className="md:sticky top-0 h-fit ">

<div className="border-t border-b border-neutral-200 p-6 mb-10  flex justify-between items-center">
  <div className="flex flex-col-reverse gap-4 justify-between">
    <div>
      <p className="uppercase tracking-[0.25em] text-xs text-neutral-400">
       Meet Your Developer

      </p>


     <span className=" font-[Philosopher]">Abhilash Tiwari</span>
     

      <p className="text-neutral-500 mt-1">
        Working with the TA Sign team to
design and develop modern business websites.
      </p>
    </div>

    <img
      src="/developer-img.png"
      alt=""
      className="w-20 h-20 rounded-full object-cover"
    />
  </div>

  <div className="mt-6 lg:mr-20 pl-6 border-l border-neutral-200">
    <p className="text-sm text-neutral-500">
      Business websites starting from
    </p>

    <h4 className="text-5xl font-semibold mt-2 text-blue-600 tracking-tight font-[Philosopher]">
      ₹5,999
    </h4>
  </div>
</div>

  

  <h2 className="mt-5 text-5xl md:text-6xl font-semibold tracking-wide leading-none font-[Philosopher]">
   Your Business
Deserves <br/> More Than
Just A <br/> Social  Media
Profile.
  </h2>

  <p className="mt-8 text-lg text-neutral-600 leading-8">
    A professional website isn't just about being online.
    It's about being remembered, trusted and chosen.
  </p>

  
  

  <div className="mt-12 border-l border-neutral-200 pl-6">
  <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
    Why Businesses Invest In A Website
  </span>

  <p className="mt-4 text-neutral-600 leading-8">
    A website helps potential clients understand who you are,
    what you offer and why they should trust your business
    before they ever contact you.
  </p>

  <p className="mt-6 text-neutral-600 leading-8">
    Whether you're an advocate, CA firm, consultant or service
    provider, your website becomes your digital office —
    available 24/7 to answer questions, showcase expertise
    and generate inquiries.
  </p>
</div>

  <div className="mt-12 pt-8 border-t border-neutral-200">

    <a
      href="#portfolio"
      className="group inline-flex items-center gap-3 text-base font-medium"
    >
      View Selected Work

      <ArrowUpRight
        size={18}
        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition"
      />
    </a>

  </div>

</div>



      {/* RIGHT */}
<div className=" flex flex-col items-end gap-10 lg:border-l lg:pl-10 lg:shadow-md pb-10">
  <p className="uppercase tracking-[0.3em] text-xs text-neutral-400">
    Selected Work
  </p>

  <h3 className="mt-3 text-3xl font-semibold">
    A glimpse into what we build.
  </h3>


  {items.map((item) => (
   <div className="w-full h-full max-w-[620px]">
  


  <div className="relative overflow-hidden w-full h-full md:h-[300px] group">
    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 w-full  object-cover transition duration-700 group-hover:scale-105"
    />
  </div>

  <div className="mt-5 flex justify-between gap-8">
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
        {item.number}
      </p>

      <h3 className="mt-2 text-2xl font-medium">
        {item.title}
      </h3>
    </div>

    <p className="max-w-[340px] text-neutral-500 leading-7">
      {item.desc}
    </p>
  </div>
</div>
  ))}
</div>

    </div>

  </div>
</section>
  );
};

export default WebsiteDevelopment;