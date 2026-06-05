import { MoveUpRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const infos = [
  {
    title: "Trademark Registration",
    infoText: `A trademark protects your brand identity — including your business name, logo, or slogan — by giving you exclusive legal rights. It prevents unauthorized usage, builds customer trust, and strengthens brand recognition. Ideal for startups, entrepreneurs, and established businesses looking to secure their intellectual property.`
  },
  {
    title: "Digital Signature Certificate (DSC)",
    infoText: `A Digital Signature Certificate is essential for secure online authentication and legally valid e-signing. It is required for company `
  },
  {
    title: "ISO Certification",
    infoText: `ISO certification demonstrates your organization’s commitment to quality, safety, and efficiency.`,
    link: "/iso-certification"
  },

  {
    title: " Website Development",
    infoText : "we build modern websites that help businesses build trust,generate leads and grow online.",
    link : "/website-development"
  }
]

const ServiceInfo = () => {
  const navigate = useNavigate()
  return (
    <section className='mt-20 max-w-7xl mx-auto px-6 mb-30'>
      {infos.map((info, i) => (
        <div
        onClick={() =>{navigate(info.link)}} 
          key={i} 
          className="group w-full relative py-8 px-6 flex flex-col md:flex-row  items-start md:items-center justify-between gap-10 border-b border-black/20 overflow-hidden cursor-pointer"
        >
     
          <div className='absolute inset-0 bg-[#0040FA] scale-y-0 rotate-x-[-40deg] group-hover:scale-110 group-hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]  origin-bottom z-0' />
          <span className=' text-xs font-bold text-black group-hover:text-white z-10'>0{i + 1}</span>
      
          <div className='w-full md:w-1/3 z-10 pointer-events-none'>
            <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-white transition-colors duration-300">
              {info.title}
            </h1>
          </div>

          <div className='w-full md:w-1/2 z-10 pointer-events-none'>
            <p className="text-neutral-600 group-hover:text-white text-sm md:text-base leading-relaxed transition-colors duration-300 line-clamp-1">
              {info.infoText}
            </p>
          </div>
          <MoveUpRight size={18} className='text-black/60 z-10 group-hover:text-white group-hover:translate-x-3 group-hover:-translate-y-2 transition-all duration-200' />
        </div>
      ))}
    </section>
  )
}

export default ServiceInfo