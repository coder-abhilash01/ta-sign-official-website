import { Link } from "react-router-dom";
import {
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Headset,
} from "lucide-react";

const AnnouncementStrip = () => {
  return (
    <section className="w-full bg-[#0040FA] text-white border-b border-blue-600">

      {/* Desktop */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-4 h-14 items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-3 overflow-hidden">
          <Headset size={18} className="shrink-0" />

          <p className="text-sm xl:text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="font-semibold">
              Need Technical Assistance?
            </span>{" "}
            Get expert support for Digital Signature Certificate (DSC),
            Trademark, ISO Certification & Government Tender Services.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">

          

          <a
            href="https://wa.me/919306746685"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold hover:bg-[#1ebe5d] transition"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>

          <Link
            to="/digital-signature-certificate"
            className="flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
          >
            DSC Services
            <ArrowRight size={15} />
          </Link>

        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden py-3 px-4">

           <div className="flex items-center gap-3 overflow-hidden">
          <Headset size={18} className="shrink-0" />

          <p className="text-sm xl:text-[15px] whitespace-nowrap overflow-hidden text-ellipsis">
            <span className="font-semibold">
              Need Technical Assistance?
            </span>{" "}
            Get expert support for Digital Signature Certificate (DSC),
            Trademark, ISO Certification & Government Tender Services.
          </p>
        </div>

        <a
          href="tel:+919306746685"
          className="mt-2 flex justify-center items-center gap-2 text-white font-bold text-lg"
        >
          <PhoneCall size={18} />
          +91 9306746685
        </a>

        <p className="text-center text-xs text-blue-100 mt-1">
          DSC • Trademark • ISO • Government Tender Services
        </p>

        <div className="flex gap-3 mt-4">

          <a
            href="https://wa.me/919306746685"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center justify-center gap-1 flex-1 rounded-full bg-white text-black py-2.5 text-center font-semibold"
          >
          <MessageCircle size={18}/>  WhatsApp
          </a>

          <Link
            to="/digital-signature-certificate"
            className="flex-1 rounded-full border border-white py-2.5 text-center font-semibold"
          >
            DSC Services
          </Link>

        </div>

      </div>

    </section>
  );
};

export default AnnouncementStrip;