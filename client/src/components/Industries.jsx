import { industries } from '@/data/Iso'
import React from 'react'

const Industries = () => {
  return (
  <section className="pb-24">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-2xl">

                        <p
                            className="text-sm uppercase
              tracking-[0.25em]
              text-blue-700 mb-5"
                        >
                            Industries
                        </p>

                        <h2
                            className="text-4xl md:text-5xl
              font-semibold tracking-tight
              text-neutral-900"
                        >
                            Businesses We Work With
                        </h2>

                    </div>

                    <div className="flex flex-wrap gap-4 mt-14">

                        {industries.map((item, index) => (
                            <div
                                key={index}
                                className="px-6 h-14 rounded-full
                bg-blue-50 border border-neutral-200
                flex items-center justify-center
                text-blue-600 font-medium
                hover:border-[#0040FA]
                hover:text-[#0040FA]
                transition-all"
                            >
                                {item}
                            </div>
                        ))}

                    </div>

                </div>

            </section>
  )
}

export default Industries
