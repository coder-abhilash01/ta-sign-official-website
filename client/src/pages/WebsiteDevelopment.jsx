import React from "react";
import { ExternalLink } from "lucide-react";
import { Helmet } from "react-helmet-async";

const items = [
  {
    number: "01",
    title: "UrbanVibe E-Commerce",
    image: "/projects/project1.jpeg",
    link: "https://urbanvibeshopping.vercel.app/",
    desc: "Designed to create a modern shopping experience with clear product discovery, responsive layouts and stronger brand perception.",
  },


  {
    number: "02",
    title: "Balaji Property - Real Estate Website",
    image: "/projects/project3.jpeg",
    link: "https://balaji-property.com/",
    desc: "A modern real estate website designed to showcase properties, highlight the brand’s ventures, and make it easy for customers to get in touch.",
  },

  {
    number: "03",
    title: "Portfolio Website",
    image: "/projects/project5.png",
    link: "https://abhilash-portfolio-gray.vercel.app/",
    desc: "Focused on simplifying complex services through structured content, intuitive navigation and a more trustworthy digital presence.",
  },
];

const WebsiteDevelopment = () => {

  return (
    <>
      <Helmet>

        <title>
          Website Development Services in India | TA Sign
        </title>

        <meta
          name="description"
          content="Professional website development services for businesses and professionals. Get clean, responsive websites for eCommerce, real estate, CA, advocates, portfolios and more, starting at ₹5,999."
        />


      </Helmet>

      <main className="w-full bg-[#FBFBFB] text-neutral-900 font-[Montserrat] pt-4">


        <div className="w-full overflow-hidden">
          <img
            src="https://ik.imagekit.io/abhistore/utilities/ChatGPT%20Image%20Sep%2020,%202026,%2004_50_11%20PM.png"
            alt="Website development services for businesses by TA Sign"
            className="w-full lg:w-[90vw] lg:h-[55vh] object-cover mx-auto"
            fetchPriority="high"
          />
        </div>


        <div className="w-full mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_600px] gap-20">

            {/* =========================
                LEFT CONTENT
            ========================== */}

            <div className="md:sticky top-0 h-fit">

              {/* Developer + Pricing */}
              <div className="sm:border-t border-b border-neutral-200 p-2 sm:p-6 mb-10 flex flex-col sm:flex-row justify-between items-center">

                <div className="flex flex-col gap-4 justify-between w-full">
                  <img
                    src="/developer-img.png"
                    alt="Abhilash Tiwari - Website Developer"
                    className="w-20 h-20 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="uppercase tracking-[0.25em] text-xs text-neutral-400">
                      Meet Your Developer
                    </p>

                    <span className="font-[Philosopher] text-xl">
                      Abhilash Tiwari
                    </span>

                    <p className="text-neutral-500 mt-1 leading-7">
                      Working with the TA Sign team to design and develop
                      modern business websites.
                    </p>
                  </div>


                </div>

                <div className="w-full sm:w-md mt-6 lg:mr-20 pt-6 sm:pl-6 border-t sm:border-t-0 sm:border-l border-blue-300 self-end">

                  <p className="text-sm text-neutral-500">
                    Business websites starting from
                  </p>

                  <h2 className="text-5xl font-semibold mt-2 text-blue-600 tracking-tight font-[Philosopher]">
                    ₹5,999
                  </h2>
<div className="self-end  text-sm mt-5">
  <span className="text-neutral-400">Have a project?</span>{" "}
  <a
    href="https://wa.me/917651993775"
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-800 hover:text-blue-600 transition-colors underline underline-offset-4"
  >
    WhatsApp me ↗
  </a>
</div>
                </div>
              </div>

              {/* Main H1 */}
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide leading-none font-[Philosopher]">
                Your Business
                <br />
                Deserves More Than
                <br />
                Just A Social Media
                <br />
                Profile.
              </h1>

              <p className="mt-8 text-lg text-neutral-600 leading-8">
                A professional website isn't just about being online.
                It's about being remembered, trusted and chosen.
              </p>


              <section
                className="mt-12 border-l border-neutral-200 pl-6"
                aria-labelledby="why-businesses-invest"
              >
                <h2
                  id="why-businesses-invest"
                  className="text-xs uppercase tracking-[0.25em] text-neutral-400"
                >
                  Why Businesses Invest In A Website
                </h2>

                <p className="mt-4 text-neutral-600 leading-8">
                  A website helps potential clients understand who you are,
                  what you offer and why they should trust your business
                  before they ever contact you.
                </p>

                <p className="mt-6 text-neutral-600 leading-8">
                  Whether you're an advocate, CA firm, consultant or service
                  provider, your website becomes your digital office —
                  available 24/7 to answer questions, showcase expertise
                  and generate inquiries.
                </p>
              </section>

              <div className="mt-12 pt-8 border-t border-neutral-200" />
            </div>

            {/* =========================
                RIGHT CONTENT
            ========================== */}

            <section
              className="bg-[#F8F8F6] z-10 flex flex-col items-end gap-10 lg:border-l lg:pl-10 lg:shadow-md pb-10"
              aria-labelledby="selected-work"
            >

              {/* Portfolio Button */}
              <a
                href="https://abhilash-portfolio-gray.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Abhilash Tiwari's portfolio"
                className="flex border border-black bg-black rounded-full group px-6 py-3 mb-4 hover:scale-105 transition-all duration-300 text-white items-center gap-4 cursor-pointer"
              >
                Portfolio

                <span className="relative items-center justify-center">
                  <span className="inline-block w-2 h-2 scale-90 group-hover:scale-300 bg-amber-700 rounded-full items-center justify-center transition-all duration-300" />

                  <ExternalLink
                    size={15}
                    className="absolute scale-0 group-hover:scale-100 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 top-1/2 left-1/2"
                  />
                </span>
              </a>


              <div className="w-full">
                <p className="uppercase tracking-[0.3em] text-xs text-blue-700">
                  Selected Work
                </p>

                <h2
                  id="selected-work"
                  className="mt-2 text-3xl font-semibold"
                >
                  A glimpse into what we build.
                </h2>
              </div>

              {/* Projects */}
              {items.map((item) => (
                <article
                  key={item.title}
                  className="w-full h-full max-w-[620px] border-b border-blue-200 pb-8"
                >

                  <div className="relative overflow-hidden w-full md:h-[300px] group">

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title}`}
                    >
                      <img
                        src={item.image}
                        alt={`${item.title} website project`}
                        className="md:absolute inset-0 w-full object-cover transition duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </a>

                  </div>

                  <div className="mt-5 flex flex-col md:flex-row justify-between gap-2 md:gap-8">

                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                        {item.number}
                      </p>

                      <h3 className="mt-1 text-2xl font-medium">
                        {item.title}
                      </h3>
                    </div>

                    <p className="max-w-[340px] text-neutral-500 leading-7">
                      {item.desc}
                    </p>

                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default WebsiteDevelopment;