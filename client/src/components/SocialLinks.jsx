import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  MessageCircle,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const SocialLinks = () => {
  const socials = [
    { icon: MessageCircle, label: "WhatsApp", link: "https://wa.me/919306746685" },
    { icon: Instagram, label: "Instagram", link: "https://www.instagram.com/ta_digital_signature?igsh=MTVtZmJ5NXVqcHUwbQ==" },
    { icon: FaFacebookF, label: "Facebook", link: "https://www.facebook.com/TiwariDigitalSignature" },
    { icon: MapPin, label: "Google Business", link: "#" },
  ];

  return (
    // Clean and sleek icon container without mismatched top headings
    <div className="flex items-center gap-3">
      {socials.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="
              w-9 h-9
              rounded-xl
              border border-white/5
              bg-white/[0.03]
              flex items-center justify-center
              text-neutral-400
              hover:text-white
              hover:border-blue-500
              hover:bg-blue-600
              hover:-translate-y-1
              transition-all duration-300
              backdrop-blur-sm
            "
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;