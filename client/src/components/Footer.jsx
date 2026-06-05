import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  PlayCircle,
  FileText,
  MapPinHouse,
  MailIcon,
  PhoneCall, // Phone icon ko add kiya consistency ke liye
} from "lucide-react";

import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const services = [
  { title: "DSC Certificate", link: "/digital-signature-certificate" },
  { title: "Trademark Registration", link: "/services" },
  { title: "ISO Certification", link: "/iso-certification" },
  { title: "Buy USB Token", link: "/buy-token" },
];

const resources = [
  { title: "Demo Videos", icon: <PlayCircle size={16} />, link: "/demo-videos" },
  { title: "Authorization Letters", icon: <FileText size={16} />, link: "/authorization-letters" },
  { title: "Blogs & Guides", icon: <FileText size={16} />, link: "/blog" },
];

const Footer = () => {
  return (
    <footer
      className="max-w-[1600px] mx-auto
        sm:rounded-[32px]
        overflow-hidden
        bg-gradient-to-br from-[#1f2d49] to-[#111827]
        text-white border border-white/10"
    >
      {/* MAIN GRID */}
      <div
        className="max-w-7xl mx-auto
        px-6 py-16
        grid grid-cols-1 md:grid-cols-2
        lg:grid-cols-4 gap-14"
      >
        {/* LEFT COLUMN: BRAND */}
        <div className="space-y-4">
          <img
            src="/logo.png"
            alt="TA SIGN"
            className="w-28 object-contain"
          />
          <p className="text-sm leading-7 text-neutral-400 max-w-sm">
            Professional DSC, ISO and compliance support services for Chartered Accountants,
            Advocates, firms and businesses across India.
          </p>
          <div className="flex items-center gap-3 text-sm text-neutral-400">
            <ShieldCheck size={15} />
            <span>DSC • ISO • Trademark Services</span>
          </div>
        </div>

        {/* SERVICES COLUMN */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.18em] text-blue-400 mb-7">
            Services
          </h3>
          <ul className="space-y-5">
            {services.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="group flex items-center justify-between text-neutral-300 hover:text-white transition-all"
                >
                  <span className="relative w-fit">
                    {item.title}
                    <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES COLUMN */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.18em] text-blue-400 mb-7">
            Resources
          </h3>
          <ul className="space-y-5">
            {resources.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="group flex items-center justify-between text-neutral-300 hover:text-white transition-all"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="relative w-fit">
                      {item.title}
                      <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white group-hover:w-full transition-all duration-300" />
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT COLUMN (Fixed & Enhanced) */}
        <div>
          <h3 className="text-sm uppercase tracking-[0.18em] text-blue-400 mb-7">
            Contact
          </h3>
          <ul className="space-y-5">
            {/* Phone Section */}
            <li className="flex gap-3 items-start text-sm">
              <PhoneCall size={18} className="text-neutral-400 mt-0.5 shrink-0" />
              <div className="flex flex-col space-y-2">
                <a href="tel:+919306746685" className="text-neutral-300 hover:text-white transition">
                  +91 9306746685
                </a>
                <a href="tel:+917651993775" className="text-neutral-300 hover:text-white transition">
                  +91 7651993775
                </a>
              </div>
            </li>

            {/* Email Section */}
            <li className="text-sm">
              <a href="mailto:dsc.knp1@gmail.com" className="text-neutral-300 hover:text-white transition flex gap-3 items-center">
                <MailIcon size={18} className="text-neutral-400 shrink-0"/> 
                <span>dsc.knp1@gmail.com</span>
              </a>
            </li>

            {/* Address Section */}
            <li className="text-sm text-neutral-300 flex gap-3 items-start leading-6">
              <MapPinHouse size={18} className="text-neutral-400 mt-0.5 shrink-0" />
              <span>
                Mangla Vihar-2,<br />
                Kanpur – 208021
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black/10">
        <div
          className="max-w-7xl mx-auto
          px-6 py-6
          flex flex-col sm:flex-row
          items-center justify-between
          gap-4"
        >
          <p className="text-sm text-neutral-500 text-center sm:text-left">
            Copyright © 2026 TA SIGN. All rights reserved.
          </p>

          {/* Social icons seamlessly placed right side */}
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;