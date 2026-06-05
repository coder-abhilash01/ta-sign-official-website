import { useMemo, useState } from "react";
import BlogCard from "../components/BlogCard";
import { blogs, popularSearches, faqData } from "../data/blogData";
import { Search, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch =
        blog.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        blog.excerpt
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" ||
        blog.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
    <Helmet>
  <title>
    Business Compliance & DSC Blog | TA Sign
  </title>

  <meta
    name="description"
    content="Read articles about Digital Signature Certificates, Trademark Registration, ISO Certification and business compliance."
  />
</Helmet>

  <section className="bg-[#f8f8f6] min-h-screen">
      {/* HERO */}

      <section className="border-b border-neutral-200">
        <div className="w-full mx-auto px-6 md:px-16 py-14 flex flex-col lg:flex-row bg-blue-200 items-center justify-between">

          <div className="max-w-4xl">
            

            <h1
              className="
              mt-8
              text-5xl
              md:text-7xl
              font-semibold
              tracking-tight
              leading-[0.95]
            "
            >
              DSC, Trademark &
              <br />
              Compliance Guides
            </h1>

            <p
              className="
              mt-8
              text-lg
              text-neutral-600
              max-w-2xl
              leading-relaxed
            "
            >
              Expert articles, guides and updates on
              Digital Signature Certificates,
              Trademark Registration, ISO Certification
              and Government Tender Compliance.
            </p>
          </div>

          {/* SEARCH */}

          <div className="mt-12 w-2/3 xl:w-1/3 flex justify-end ">
            <div
              className="  bg-white  border  border-neutral-200  rounded-2xl  px-4  h-14 
              flex  items-center  gap-3 w-full  shadow-inner  shadow-black/40  "
            >
              <Search size={18} />

              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full outline-none bg-transparent
                
              "
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILTERS */}

      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(category)
                }
                className={`
                  px-5
                  py-2.5
                  rounded-full
                  border
                  transition-all

                  ${
                    activeCategory === category
                      ? "bg-[#0040FA] text-white border-[#0040FA]"
                      : "bg-white border-neutral-200"
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* BLOG  */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-3 gap-8">

            {filteredBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}

          </div>

          {!filteredBlogs.length && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-medium">
                No Articles Found
              </h3>

              <p className="text-neutral-500 mt-2">
                Try another keyword.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* POPULAR SEARCHES */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
            bg-white
            border
            border-neutral-200
            rounded-3xl
            p-8
          "
          >
            <h2 className="text-3xl font-semibold">
              Popular Searches
            </h2>

            <div className="flex flex-wrap gap-3 mt-8">

              {popularSearches.map((item) => (
                <button
                  key={item}
                  onClick={() => setSearch(item)}
                  className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-neutral-200
                  hover:border-[#0040FA]
                  transition-all
                "
                >
                  {item}
                </button>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-semibold
            tracking-tight
            text-center
          "
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-4">

            {faqData.map((faq, index) => (
              <div
                key={index}
                className="
                bg-white
                border
                border-neutral-200
                rounded-2xl
                p-6
              "
              >
                <h3 className="font-semibold text-lg">
                  {faq.question}
                </h3>

                <p className="mt-3 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
            rounded-[36px]
            bg-[#0f172a]
            px-10
            py-16
          "
          >
            <div
              className="
              flex
              flex-col
              lg:flex-row
              justify-between
              gap-10
              lg:items-center
            "
            >
              <div>
                <h2
                  className="
                  text-4xl
                  lg:text-5xl
                  font-semibold
                  text-white
                "
                >
                  Need DSC or Trademark
                  Assistance?
                </h2>

                <p
                  className="
                  mt-5
                  text-neutral-300
                  max-w-2xl
                "
                >
                  Get professional assistance for
                  Class 3 DSC, Trademark Registration,
                  ISO Certification and Government
                  Tender compliance.
                </p>
              </div>

              <a
                href="https://wa.me/919306746685"
                target="_blank"
                rel="noreferrer"
                className="
                h-14
                px-7
                rounded-full
                bg-white
                text-black
                font-medium
                flex
                items-center
                gap-2
                w-fit
              "
              >
                Talk To Expert

                <ArrowRight size={18} />
              </a>

            </div>
          </div>

        </div>
      </section>
    </section>
</>
  
  );
};

export default Blog;