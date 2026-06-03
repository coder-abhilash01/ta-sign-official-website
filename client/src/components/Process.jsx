import React from 'react'

const Process = () => {
  return (
      <div className="mt-28 max-w-6xl mx-auto px-6">
        <h3 className="text-center text-3xl font-semibold text-gray-900">
          How It Works
        </h3>

        <div className="mt-12 grid md:grid-cols-3 gap-10 text-center">
          {[
            ["Choose Type", "Select the right DSC for your use case"],
            ["Submit Documents", "Online verification & KYC"],
            ["Receive Token", "Get DSC in secure USB token"],
          ].map(([title, desc], i) => (
            <div key={i} className="p-6 border rounded-xl">
              <p className="text-xl font-medium text-gray-900">{title}</p>
              <p className="mt-3 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Process
