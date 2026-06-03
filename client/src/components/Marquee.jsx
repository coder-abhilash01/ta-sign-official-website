import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ShieldCheck } from 'lucide-react'
import React, { useEffect, useRef } from 'react'

const partnerLogos = [
    "/partner-logos/emudhra-logo.jpg",
    "/partner-logos/care4Sign-logo.jpg",
    "/partner-logos/vsign-logo.webp",
    "/partner-logos/prodigisign-logo.png",
    "/partner-logos/pantasign-logo.png",
    "/partner-logos/signX-logo.webp",

]


const Marquee = () => {
    const marqueeRef = useRef(null)

    useGSAP(() => {
        gsap.to(marqueeRef.current,

            {
                ease: "linear",
                x: "-50%",
                duration: 10,
                repeat: -1
            }
        )
    }, [])
    return (
        <section className='w-full relative  overflow-hidden flex flex-col items-center  md:px-20'>
            <div className=' w-[95%] z-50 h-fit text-sm text-black px-5 py-1 flex text-center justify-start gap-1 font-[Philosopher] tracking-wider uppercase ' > <ShieldCheck size={15} /> Trusted Dsc Providers</div>
            <div className="w-[95%] relative bg-white border-y border-black/10 overflow-hidden py-2 sm:py-6 ">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-white to-transparent z-10" />
                <div className=''>
                    <div ref={marqueeRef} className="flex w-max  will-change-transform mt-2">
                        {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                className="h-14 w-auto object-contain aspect-6/5 sm:aspect-8/5 opacity-100  hover:opacity-70 transition mx-12"
                            />
                        ))}
                    </div></div>
            </div>

    

        </section>
    )
}

export default Marquee
