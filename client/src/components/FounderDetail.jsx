import { Mail, Phone } from 'lucide-react'
import React from 'react'

const FounderDetail = () => {
  return (
    <div className="mt-10 bg-white border rounded-3xl p-5 shadow-sm font-[Montserrat]">

    <div className="flex flex-col sm:flex-row gap-5  sm:items-center">

      <img
        src="/founder.jpeg"
        alt="Founder"
        className="w-28 h-28 rounded-2xl object-cover"
      />

      <div>

        <h2 className="text-xl font-semibold text-black tracking-tight">
          Anil Tiwari
        </h2>

        <p className="text-gray-400 tracking-wide">
          Founder, TA SIGN
        </p>

        <p className="text-sm text-gray-600 mt-3 max-w-md">
          Helping businesses, advocates, CAs and professionals with
          Digital Signature Certificates, Trademark Registration and
          compliance services since 2016.
        </p>

      </div>

    </div>

    <div className="grid sm:grid-cols-2 gap-4 mt-6">

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <Phone size={18} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Call Us</p>
          <h3 className="font-semibold">
            +91 9306746685
          </h3>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
          <Mail size={18} />
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <h3 className="font-semibold">
            dsc.knp1@gmail.com
          </h3>
        </div>
      </div>

    </div>

  </div>
  )
}

export default FounderDetail
