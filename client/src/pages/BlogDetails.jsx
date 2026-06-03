import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">
            Blog Not Found
          </h1>

          <p className="mt-4 text-neutral-600">
            The article you're looking for doesn't exist.
          </p>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[#0040FA] text-white"
          >
            <ArrowLeft size={18} />
            Back To Blogs
          </Link>
        </div>
      </section>
    );
  }

  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 3);

  return (
    <section className="bg-[#f8f8f6] min-h-screen">
      {/* HERO */}

      <section className="border-b border-neutral-200">
        <div className="max-w-5xl mx-auto px-6 py-20">

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-black transition"
          >
            <ArrowLeft size={18} />
            Back To Blogs
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              {blog.category}
            </span>

            <span className="text-neutral-500 text-sm">
              {blog.readTime}
            </span>
          </div>

          <h1
            className="
            mt-6
            text-4xl
            md:text-6xl
            font-semibold
            tracking-tight
            leading-tight
          "
          >
            {blog.title}
          </h1>

          <p className="mt-6 text-neutral-500">
            Published on {blog.date}
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-neutral-200">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[450px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ARTICLE */}

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <div
            className="
            bg-white
            border
            border-neutral-200
            rounded-3xl
            p-8
            md:p-12
          "
          >
            <div
              className="
              whitespace-pre-line
              text-lg
              leading-9
              text-neutral-700
            "
            >
              {blog.content}
            </div>
          </div>

          {/* CTA */}

          <div
            className="
            mt-10
            bg-[#0f172a]
            rounded-3xl
            p-8
            md:p-10
          "
          >
            <h2 className="text-3xl font-semibold text-white">
              Need Help With DSC, Trademark or ISO?
            </h2>

            <p className="mt-4 text-neutral-300 max-w-2xl">
              Get professional assistance from TA Sign
              for Class 3 DSC, Trademark Registration,
              ISO Certification and Government Tender
              Services.
            </p>

            <a
              href="https://wa.me/919306746685"
              target="_blank"
              rel="noreferrer"
              className="
              inline-flex
              items-center
              gap-2
              mt-8
              px-6
              py-3
              rounded-full
              bg-white
              text-black
              font-medium
            "
            >
              Chat On WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* RELATED BLOGS */}

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-semibold tracking-tight">
            Related Articles
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">

            {relatedBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="
                bg-white
                border
                border-neutral-200
                rounded-3xl
                overflow-hidden
                hover:shadow-lg
                transition-all
              "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-6">

                  <span className="text-sm text-blue-700 font-medium">
                    {item.category}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-neutral-600 line-clamp-3">
                    {item.excerpt}
                  </p>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>
    </section>
  );
};

export default BlogDetails;