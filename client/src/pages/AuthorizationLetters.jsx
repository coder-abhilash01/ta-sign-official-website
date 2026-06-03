import React from "react";
import {
  Download,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";

const letters = [
  {
    company: "eMudhra",
    desc: "Authorization letter required for eMudhra DSC verification and processing.",
    file: "/New folder/auth-letters/Emudhra-AuthorizationLetter-2021 (1).pdf",
    logo: "/partner-logos/emudhra-logo.jpg",
    type: "PDF",
  },

  {
    company: "Care4Sign",
    desc: "Official authorization format for Care4Sign DSC applications.",
    file: "/New folder/auth-letters/Care4sign-Authorisation-letter-Format.pdf",
    logo: "/partner-logos/care4Sign-logo.jpg",
    type: "PDF",
  },

  {
    company: "Pantasign",
    desc: "Download authorization letter for Pantasign DSC issuance.",
    file: "/New folder/auth-letters/pantasign-letter.pdf",
    logo: "/partner-logos/pantasign-logo.png",
    type: "PDF",
  },

  {
    company: "V-Sign",
    desc: "Authorization document required for V-Sign digital signature process.",
    file: "/New folder/auth-letters/vsign-letter.docx",
    logo: "/partner-logos/vsign-logo.webp",
    type: "DOCX",
  },

  {
    company: "SignX",
    desc: "Required authorization letter for SignX DSC verification workflow.",
    file: "/New folder/auth-letters/SignX-Authorization-Letter.pdf",
    logo: "/partner-logos/signX-logo.webp",
    type: "PDF",
  },

  {
    company: "Prodigisign",
    desc: "Authorization and onboarding document for Prodigisign services.",
    file: "/New folder/auth-letters/Prodigy-Authorization-Letter.doc",
    logo: "/partner-logos/prodigisign-logo.png",
    type: "DOC",
  },
];

const AuthorizationLetters = () => {
  return (
    <section className="w-full min-h-screen bg-[#FAFAFA] pt-32 pb-24 overflow-hidden">



      {/* HERO */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

     <div className="max-w-3xl"> 
      <p className="text-sm uppercase tracking-[0.25em] text-neutral-400 mb-5" > Resources </p> 
      <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-none" > Authorization <br /> Letters </h1>
       <p className="mt-8 text-lg leading-relaxed text-neutral-600" > Download authorization letters and required documents for DSC processing, token setup and verification. </p> 
       </div>

      </div>

      {/* GRID */}

      <div className="max-w-7xl mx-auto px-6 mt-24 relative z-10">

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {letters.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white 
              border border-white/40 rounded-[34px] p-7
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              transition-all duration-500 hover:-translate-y-2"
            >

            

              <div className="flex items-start justify-between">

                {/* LOGO */}

                <div
                  className="w-16 h-16 rounded-2xl bg-[#f5f7ff]
                  border border-blue-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    src={item.logo}
                    alt={item.company}
                    className="w-11 h-11 object-contain"
                  />
                </div>

                {/* FILE TYPE */}

                <div
                  className="px-3 h-9 rounded-full bg-neutral-100
                  flex items-center gap-2 text-xs font-semibold
                  tracking-wide text-neutral-700"
                >
                  <FileText size={14} />
                  {item.type}
                </div>

              </div>

              {/* CONTENT */}

              <div className="mt-8">

                <h2
                  className="text-2xl font-semibold
                  tracking-tight text-neutral-900"
                >
                  {item.company}
                </h2>

                <p
                  className="mt-4 text-[15px]
                  leading-relaxed text-neutral-600"
                >
                  {item.desc}
                </p>

              </div>

              {/* ACTIONS */}

              <div className="mt-10 flex items-center gap-3">

                <a
                  href={item.file}
                  download
                  className="group/btn flex-1 h-13 rounded-full
                   bg-gradient-to-r from-[#2345ac] to-[#020293] text-white flex items-center
                  justify-center gap-2 text-sm font-medium
                  hover:bg-[#0032c7] transition-all duration-300 shadow-md border"
                >
                  <Download
                    size={18}
                    className="group-hover/btn:translate-y-[1px] transition"
                  />

                  Download
                </a>

                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="w-13 h-13 rounded-full bg-white
                  border border-neutral-200 flex items-center
                  justify-center hover:border-[#0040FA]
                  hover:text-[#0040FA] transition-all duration-300"
                >
                  <ExternalLink size={18} />
                </a>

              </div>

              {/* HOVER LINE */}

              <div
                className="absolute bottom-0 left-0 w-0 h-[3px]
                bg-[#0040FA] rounded-full
                group-hover:w-full transition-all duration-500"
              />

            </div>
          ))}

        </div>

      </div>

      {/* SUPPORT SECTION */}

      <div className="max-w-7xl mx-auto px-6 mt-28 relative z-10">

        <div
          className="relative overflow-hidden rounded-[38px]
          bg-[#0f172a] text-white p-10 lg:p-14"
        >

          {/* BG GLOW */}

          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[120px]" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            <div className="max-w-2xl">

              <p
                className="text-xs uppercase tracking-[0.3em]
                text-blue-300 mb-5"
              >
                Need Help?
              </p>

              <h3
                className="text-3xl lg:text-5xl
                font-semibold tracking-tight leading-tight"
              >
                Can’t find your required document?
              </h3>

              <p
                className="mt-6 text-neutral-300
                leading-relaxed text-lg"
              >
                Contact our team and we’ll help you with authorization
                letters, token setup files or DSC-related resources.
              </p>

            </div>

            <Link
              to="/contact"
              className="group w-fit h-14 px-8 rounded-full
              bg-white text-black flex items-center justify-center
              gap-3 font-medium hover:bg-neutral-200 transition-all"
            >
              Contact Support

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AuthorizationLetters;