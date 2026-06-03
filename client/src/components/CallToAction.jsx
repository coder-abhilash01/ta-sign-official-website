import { ArrowRight, MoveRight, PhoneCall, WheatIcon } from 'lucide-react'
import React from 'react'
import ContactForm from './ContactForm'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";


const CallToAction = () => {
    return (

        <div className="mt-10 flex flex-wrap gap-4">

            <Dialog>
                <DialogTrigger asChild>


                    <button

                        className=" relative inline-flex items-center gap-2 border border-black
    bg-gradient-to-r from-[#192f72] to-[#01012a] px-4 sm:px-6 py-3 sm:py-6 text-xs sm:text-sm font-medium text-white
  shadow-[0_10px_30px_rgba(0,0,0,0.15)] active:scale-95 hover:text-white 
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all cursor-pointer group overflow-hidden 
">
                        <span className='z-20 flex gap-2 items-center'>Get Consultation
                            <MoveRight size={18} className='group-hover:translate-x-1 transition-all duration-300' /></span>

                        <span className="absolute inset-0 bg-[#020222] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                    </button>




                </DialogTrigger>

                <DialogContent
                    className="sm:max-w-[520px]
    rounded-2xl border-neutral-200 p-0 overflow-hidden"
                >
        

                    <div className="border-b border-neutral-100 px-6 py-5 ">
                        <DialogHeader className="">
                            <DialogTitle className="text-2xl font-semibold tracking-tight">
                                Talk To Our Team
                            </DialogTitle>

                            <p className="text-sm leading-3 text-neutral-500">
                                Share your requirements and our team will
                                contact you.
                            </p>
                        </DialogHeader>
                    </div>

                    {/* FORM */}

                    <div className="px-6 py-4 ">
                        <ContactForm />
                    </div>
                </DialogContent>
            </Dialog>


            <a
                href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer"
                className="
     ]
                  "
            >
                <button

                    className=" relative inline-flex items-center gap-2 
    bg-white px-4 sm:px-6 py-3 sm:py-6 text-xs sm:text-sm font-medium text-black border border-black/20
  shadow-[0_10px_30px_rgba(0,0,0,0.15)] active:scale-95 hover:text-white 
  hover:shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all cursor-pointer group overflow-hidden border
">
                    <span className='z-20 flex gap-2 items-center'> Chat on WhatsApp
                        <MoveRight size={18} className='group-hover:translate-x-1 transition-all duration-300' /></span>

                    <span className="absolute inset-0 bg-[#020222] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-0" />
                </button>
            </a>

        </div>



    )
}

export default CallToAction
