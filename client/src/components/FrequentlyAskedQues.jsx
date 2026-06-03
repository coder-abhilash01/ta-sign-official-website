import React, { useState } from "react";
import {
  ChevronDown,
  ShieldCheck,
  BadgeHelp,
  FileSignature,
} from "lucide-react";

const faqs = [
  {
    icon: <FileSignature size={20} />,
    question: "What is a DSC Certificate?",
    answer:
      "A Digital Signature Certificate (DSC) is a secure digital key used for online signing, e-filing, GST filing, trademark registration, and other government portal authentications.",
  },

  {
    icon: <ShieldCheck size={20} />,
    question: "How long does DSC approval take?",
    answer:
      "Usually DSC issuance takes between 15 minutes to 2 hours after successful verification and document submission.",
  },

  {
    icon: <BadgeHelp size={20} />,
    question: "Do I need a USB token for DSC?",
    answer:
      "Yes, most Class 3 DSC certificates require a secure USB token for storing and using the digital signature safely.",
  },

  {
    icon: <FileSignature size={20} />,
    question: "Can you help with driver installation?",
    answer:
      "Yes, we provide utility tools, token drivers, remote assistance, and complete setup guidance for smooth DSC installation.",
  },

  {
    icon: <ShieldCheck size={20} />,
    question: "Which documents are required?",
    answer:
      "Generally Aadhaar Card, PAN Card, mobile number, email address, and video verification are required for DSC issuance.",
  },
];

const FrequentlyAskedQues = () => {
  const [active, setActive] = useState(0);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full py-24 px-6 md:px-10 bg-[#FCFCFC]">
      
      <div className="max-w-6xl mx-auto">

      

        <div className="mb-14">

          <p className="text-sm uppercase tracking-[0.25em] text-blue-600 font-medium mb-4">
            Support
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-black max-w-2xl leading-tight">
            Frequently Asked Questions
          </h2>

        </div>

        {/* FAQ LIST */}

        <div className="flex flex-col gap-4">

          {faqs.map((faq, index) => {

            const isActive = active === index;

            return (
              <div
                key={index}
                className={`rounded-3xl border shadow-md transition-all duration-300 overflow-hidden
                ${
                  isActive
                    ? "bg-white text-black/80 border-black"
                    : "bg-white hover:border-black/30"
                }`}
              >

                {/* QUESTION */}

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left px-6 md:px-8 py-6 cursor-pointer"
                >

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition
                      ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {faq.icon}
                    </div>

                    <h3 className="text-base md:text-lg font-medium">
                      {faq.question}
                    </h3>

                  </div>

                  <ChevronDown
                    size={22}
                    className={`transition duration-300
                    ${isActive ? "rotate-180" : ""}`}
                  />

                </button>

                {/* ANSWER */}

                <div
                  className={`grid transition-all duration-500 ease-in-out
                  ${
                    isActive
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-70"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p
                      className={`px-8 pb-7 text-sm md:text-base leading-8 max-w-4xl
                      ${
                        isActive
                          ? "text-black/80"
                          : "text-base"
                      }`}
                    >
                      {faq.answer}
                    </p>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQues;