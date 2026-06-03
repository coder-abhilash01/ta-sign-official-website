import { ArrowRight, MoveRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className=" w-full sm:h-[80vh] flex bg-linear-to-br from-[#f8fafc] via-[#ffffff] to-[#eef2ff] bg-[url('/hero-section-imgs/Team_meeting_hero_img.jpeg')] bg-cover
       bg-center relative overflow-hidden  font-[Montserrat]">

    
      <div className="absolute z-1 inset-0  bg-black/60 backdrop-blur-[1px]" />


      <div className='flex flex-col  w-full'>
        

        <div className=" flex-1 px-5 sm:px-10 pt-10 md:pt-25 pb-24 md:ml-10 z-4 text-white flex  flex-col justify-center  ">

      
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur-md border border-black/20 shadow">
            Trusted DSC & Compliance Partner
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-2xl sm:text-4xl xl:text-6xl font-semibold leading-tight tracking-tight">
            Digital Signature Certificates
            <span className="block ">
              ISO & Trademark Services
            </span>
            <span className="block text-white text-sm sm:text-2xl lg:text-2xl mt-3 font-normal tracking-wide ">
              Made Simple. Delivered Fast.
            </span>
          </h1>


          {/* Subtext */}
          <p className="mt-6  text-white/90 max-w-[80ch] text-sm font-medium tracking-wide">
            One platform for DSC utilities, token drivers, latest pricing,
            and compliance services. We apply on your behalf through
            authorised providers so you don’t have to worry about portals
            or technical confusion.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigate('/dsc-pricing')}
              className=" relative inline-flex items-center gap-2 
    bg-gradient-to-r from-[#192f72] to-[#01012a] px-4 sm:px-6 py-3 sm:py-6 text-xs font-medium text-white
  shadow-[0_10px_30px_rgba(0,0,0,0.15)] active:scale-95 hover:text-white 
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all cursor-pointer group overflow-hidden border
">
              <span className='z-20 flex gap-2 items-center'>View DSC Rates
                <MoveRight size={18} /></span>
              
              <span className="absolute inset-0 bg-[#020222] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
            </button>

            <button
              onClick={() => navigate('/dsc-utilities')}
              className=" relative inline-flex items-center gap-2 
    bg-white px-4 sm:px-6 py-3 sm:py-6 text-xs font-medium text-black
  shadow-[0_10px_30px_rgba(0,0,0,0.15)] active:scale-95 hover:text-white 
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all cursor-pointer group overflow-hidden border
"
            >
              <span className='z-20 flex gap-2 items-center'>   Download Utilities
                <MoveRight size={18} /></span>

              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
            </button>



          </div>


        </div>


      </div>

    </section>
  )
}

export default HeroSection
