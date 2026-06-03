import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import {
  ArrowRight,
  ChevronDown,
  MenuIcon,
  Home,
  ShieldCheck,
  BadgeCheck,
  FileSignature,
  Info,
  ExternalLink,
  FileText,
  Stamp,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { navLists, servicesText } from "@/data/navData";
import { lenis } from "./utils/lenis";


const usefulLinks = [
  {
    title: "Convert JPG to PDF",
    icon: <FileText size={18} />,
    link: "https://www.ilovepdf.com/jpg_to_pdf",
  },
  {
    title: " Check GST Status",
    icon: <ShieldCheck size={18} />,
    link: "https://cleartax.in/gst-number-search/",
  },
  {
    title: "Trademark Search",
    icon: <Stamp size={18} />,
    link: "https://www.quickcompany.in/trademarks",
  }
];

const MobileNavSheet = ({ side, className }) => {

const [open, setOpen] = useState(false);
useEffect(() => {
  if (open) {
    lenis?.stop();
  } else {
    lenis?.start();
  }

  return () => {
    lenis?.start();
  };
}, [open]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={`mr-4 cursor-pointer transition border p-1 hover:scale-105 ${className}`}
      >
        <MenuIcon />
      </SheetTrigger>

      <SheetContent side={side}
      data-lenis-prevent
        className="bg-white border-l border-gray-200 px-0 h-screen  overflow-y-auto  "
      >
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>

        {/* TOP */}
<div data-lenis-prevent
className=" flex-1">


        <div className="px-6 py-4 border-b">
          <h2 className="text-2xl font-semibold tracking-tight text-black">
            <img src="/logo.png" alt="TA SIGN" className="h-12 w-auto object-cover" />
          </h2>

          <p className="text-sm text-gray-500 tracking-wide  font-[Montserrat] ">
            by Tiwari Associates
          </p>
        </div>

        {/* NAVIGATION */}

        <div className="flex flex-col">

          <ul className="flex flex-col">

            {/* HOME */}
{navLists.map((list) => {
  const Icon = list.icon;

  return (
    <li key={list.link}
    onClick={()=> {
      setTimeout(() => setOpen(false), 200)}}>
      <NavLink
        to={list.link}
        className={({ isActive }) =>
          `group flex items-center justify-between px-6 py-4 border-b transition
          ${
            isActive
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-gray-50"
          }`
        }
      >
        <div className="flex items-center gap-3">
          <Icon size={18} />
          <span>{list.title}</span>
        </div>

        <ArrowRight
          size={16}
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition"
        />
      </NavLink>
    </li>
  );
})}

   
        
          </ul>

        <details className="border-b">
  <summary className="px-6 py-4 cursor-pointer font-medium">
    More Services
  </summary>

  <ul className="pb-3">
    {servicesText.map((service) => (
      <li key={service.title}
      onClick={()=> {
        setTimeout(() => setOpen(false), 200)
      }}>
        <NavLink
          to={service.link}
          className="block px-10 py-3 text-sm hover:bg-neutral-100"
        >
          {service.title}
        </NavLink>
      </li>
    ))}
  </ul>
</details>

          {/* CTA */}

          <div className="px-6 mt-8">
            <button
              className="group w-full flex items-center justify-center gap-2 
              bg-black text-white py-3 rounded-full 
              hover:bg-neutral-800 transition cursor-pointer"
            >
              Buy Token

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>

          {/* USEFUL LINKS */}



          <div className="mt-10 px-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-5">
              Useful Links
            </h3>

            <div className="h-px bg-neutral-200  mt-2 mb-8" />

            <div className="flex flex-col gap-3">

              {usefulLinks.map((item, index) => (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="group flex items-center justify-between 
    border border-neutral-200 rounded-2xl px-4 py-4 
    hover:bg-black hover:text-white 
    transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}

                    <span className="text-sm font-medium">
                      {item.title}
                    </span>
                  </div>

                  <ExternalLink
                    size={16}
                    className="opacity-60 group-hover:translate-x-1 
      group-hover:-translate-y-1 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        </div>

       
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavSheet;