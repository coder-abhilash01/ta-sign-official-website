
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { ArrowLeft } from "lucide-react";

import TeamSupportSection from "@/components/TeamSupportSection";
import AnnouncementStrip from "@/components/AnnouncementStrip";

import { Helmet } from "react-helmet-async";

import API from "@/../api/axios";


// =========================
// FORMAT BLOG CONTENT
// =========================

const formatContent = (text = "") => {
  return text.split("\n").map((line, i) => {

    const trimmed = line.trim();

    if (!trimmed) {
      return null;
    }


    // =========================
    // BULLET POINTS
    // =========================

    if (
      trimmed.startsWith("•") ||
      trimmed.startsWith("✓")
    ) {
      return (
        <li
          key={i}
          className="ml-6 list-disc text-neutral-700 leading-8"
        >
          {trimmed.slice(1).trim()}
        </li>
      );
    }


    // =========================
    // NUMBERED LIST
    // =========================

    if (/^\d+\./.test(trimmed)) {
      return (
        <li
          key={i}
          className="ml-6 list-decimal text-neutral-700 leading-8"
        >
          {trimmed.replace(/^\d+\.\s*/, "")}
        </li>
      );
    }


  
    if (
      trimmed.length < 60 &&
      !trimmed.endsWith(".")
    ) {
      return (
        <h2
          key={i}
          className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-black"
        >
          {trimmed}
        </h2>
      );
    }


    // =========================
    // PARAGRAPH
    // =========================

    return (
      <p
        key={i}
        className="text-neutral-700 leading-8 mb-4"
      >
        {trimmed}
      </p>
    );
  });
};


// =========================
// BLOG DETAILS
// =========================

const BlogDetails = () => {

  const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  const [relatedBlogs, setRelatedBlogs] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);


  // =========================
  // FETCH BLOG
  // =========================

  useEffect(() => {

    const fetchBlog = async () => {

      try {

        setLoading(true);

        setError(false);

        const response = await API.get(
          `/api/public/blogs/${slug}`
        );

        const blogData = response.data.data;

        setBlog(blogData);


        // =========================
        // FETCH RELATED BLOGS
        // =========================

        const blogsResponse = await API.get(
          "/api/public/blogs"
        );

        const allBlogs = blogsResponse.data.data || [];

        const related = allBlogs
          .filter(
            (item) =>
              item._id !== blogData._id &&
              item.category === blogData.category
          )
          .slice(0, 3);

        setRelatedBlogs(related);

      } catch (error) {

        console.error(
          "Error fetching blog:",
          error
        );

        setError(true);

      } finally {

        setLoading(false);

      }
    };


    if (slug) {
      fetchBlog();
    }

  }, [slug]);


  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (
      <section className="min-h-screen flex items-center justify-center bg-[#f8fafc]">

        <p className="text-neutral-500">
          Loading article...
        </p>

      </section>
    );
  }


  // =========================
  // BLOG NOT FOUND
  // =========================

  if (error || !blog) {

    return (
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#f8fafc]">

        <div className="text-center">

          <h1 className="text-5xl font-semibold">
            Blog Not Found
          </h1>

          <p className="mt-4 text-neutral-500">
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


  return (
    <>

      <Helmet prioritizeSeoTags>

        <title>
          {blog.title} | TA Sign
        </title>

        <meta
          name="description"
          content={blog.excerpt}
          key="description"
        />

      </Helmet>


      <AnnouncementStrip />


      <section className="bg-[#f8fafc]">



        <section className="relative">

          <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">


            {/* BACK */}

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-black transition"
            >

              <ArrowLeft size={18} />

              Back To Blogs

            </Link>


            {/* META */}

            <div className="mt-8 flex items-center gap-3">

              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">

                {blog.category}

              </span>

            </div>


            {/* TITLE */}

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight max-w-4xl">

              {blog.title}

            </h1>


            {/* IMAGE */}

            <div className="mt-12 relative rounded-3xl overflow-hidden">

              <img
                src={blog.coverImage?.url}
                alt={blog.title}
                className="w-full object-cover"
              />

            </div>

          </div>

        </section>


        <section className="py-10">

          <div className="md:max-w-7xl mx-auto px-6">


            <div className="bg-white shadow-lg border border-neutral-200 rounded-3xl p-8 md:p-12">

              <div className="space-y-2">

                {formatContent(blog.content)}

              </div>

            </div>



            <TeamSupportSection
              heading="Need Help With DSC, Trademark or ISO?"
              supportMessage="Get professional assistance for Class 3 DSC, Trademark Registration, ISO Certification and Government Tender Services."
            />


          </div>

        </section>



        {relatedBlogs.length > 0 && (

          <section className="pb-24">

            <div className="max-w-6xl mx-auto px-6">

              <h2 className="text-4xl font-semibold tracking-tight">
                Related Articles
              </h2>


              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

                {relatedBlogs.map((item) => (

                  <Link
                    key={item._id}
                    to={`/blog/${item.slug}`}
                    className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
                  >

                    {/* IMAGE */}

                    <div className="overflow-hidden">

                      <img
                        src={item.coverImage?.url}
                        alt={item.title}
                        className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                      />

                    </div>


                    {/* CONTENT */}

                    <div className="p-6">

                      <span className="text-sm text-blue-700 font-medium">
                        {item.category}
                      </span>


                      <h3 className="mt-3 text-xl font-semibold group-hover:text-blue-600 transition">

                        {item.title}

                      </h3>


                      <p className="mt-3 text-neutral-500 line-clamp-3">

                        {item.excerpt}

                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </section>

        )}

      </section>
    </>
  );
};

export default BlogDetails;