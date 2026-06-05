import { Link } from "react-router-dom";
import { ArrowRight, Home, Phone } from "lucide-react";

const PageNotFound = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFFFFF] flex items-center justify-center px-6">

    


      <div className="relative max-w-4xl mx-auto text-center">

        <p className="text-sm uppercase tracking-[0.3em] text-red-700 mb-6">
          Error 404
        </p>

        <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-[#0040FA]/10">
          404
        </h1>

        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 -mt-6">
          Page Not Found
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-600 leading-8">
          The page you are looking for may have been moved,
          deleted, or the URL might be incorrect.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#0040FA] text-white font-medium hover:scale-105 transition-all duration-300"
          >
            <Home size={18} />
            Back To Home
          </Link>

          <a

         href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-neutral-300 bg-white text-neutral-900 font-medium hover:bg-neutral-50 transition-all duration-300"
          >
            <Phone size={18} />
            Contact Us
          </a>

        </div>

       

      </div>
    </section>
  );
};

export default PageNotFound;