import { ArrowRight } from 'lucide-react'
import React from 'react'

const TeamSupportSection = ({heading,subHeading,supportMessage}) => {
  return (
     <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-[32px]
            bg-[#0f172a]
            border border-white/10
            px-10 py-14 lg:px-16"
          >
            <div
              className="flex flex-col lg:flex-row
              lg:items-center justify-between gap-10"
            >
              <div className="max-w-2xl">
                <p
                  className="text-blue-300
                  uppercase tracking-[0.25em]
                  text-sm mb-5"
                >
                 {subHeading}
                </p>

                <h2
                  className="text-4xl lg:text-5xl
                  font-semibold text-white
                  leading-tight tracking-tight"
                >
                 {heading}
                </h2>

                <p
                  className="mt-6 text-lg
                  leading-relaxed
                  text-neutral-300"
                >
                 {supportMessage}
                </p>
              </div>

              <a
                href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer"
                className="group h-14 px-8 rounded-xl
                bg-white text-black
                flex items-center justify-center
                gap-3 font-medium
                hover:bg-neutral-200
                transition-all duration-300
                w-fit"
              >
                Contact On WhatsApp

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default TeamSupportSection
