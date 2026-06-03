import {
  FileText,
  ShieldCheck,
  KeyRound,
  FileImage,
  Download,
  MailIcon,
} from "lucide-react";

const tools = [
  {
    title: "Get USB Token",
    desc: "Apply for secure USB token",
    icon: KeyRound,
    link: "/buy-token",
  },
  {
    title: "JPG to PDF",
    desc: "Convert images into PDF",
    icon: FileImage,
    link: "https://www.ilovepdf.com/jpg_to_pdf",
  },
  {
    title: "Authorization Letter",
    desc: "Download authorization form",
    icon: FileText,
    link: "/authorization-letters",
  },
  {
    title: "Uidai Aadhar",
    desc: "Download Aadhar file",
    icon: Download,
    link: "https://myaadhaar.uidai.gov.in/",
  },
  {
    title: "Temp Mail",
    desc: "Get Temporary Mail",
    icon: MailIcon,
    link: "/temp-mail",
  },
];

const QuickAccessTools = () => {
  return (
   <section className="w-full bg-white py-8 pb-16 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-black">
        Quick Access Tools
      </h2>

      <p className="text-gray-500 mt-2">
        Everything you need for DSC, tokens, utilities and document tools.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

      {tools.map((tool, index) => (
        <a
          key={index}
          href={tool.link}
          target="_blank"
          className="group rounded-2xl border border-gray-200
          bg-[#041e32] p-5 hover:border-black
          hover:-translate-y-1 transition-all duration-300 shadow-lg border"
        >
          <tool.icon
            size={28}
            className="mb-4 text-white"
          />

          <h3 className="font-medium text-white">
            {tool.title}
          </h3>

          <p className="text-sm text-white mt-1">
            {tool.desc}
          </p>
        </a>
      ))}

    </div>
  </div>
</section>
  )
}

export default QuickAccessTools
