import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import { ArrowLeft } from "lucide-react";
import TeamSupportSection from "@/components/TeamSupportSection";
import { Helmet } from "react-helmet-async";





const formatContent = (text) => {
  return text.split("\n").map((line, i) => {
    const trimmed = line.trim();

    if (!trimmed) return null;

    // Bullet points (• or ✓)
    if (trimmed.startsWith("•") || trimmed.startsWith("✓")) {
      return (
        <li key={i} className="ml-6 list-disc text-neutral-700 leading-8">
          {trimmed.slice(1)}
        </li>
      );
    }

    // Numbered list
    if (/^\d+\./.test(trimmed)) {
      return (
        <li key={i} className="ml-6 list-decimal text-neutral-700 leading-8">
          {trimmed.replace(/^\d+\.\s*/, "")}
        </li>
      );
    }

    // Heading (simple detection)
    if (
      trimmed.length < 60 &&
      !trimmed.endsWith(".")
    ) {
      return (
        <h2 key={i} className="text-xl md:text-2xl font-semibold mt-8 mb-3 text-black">
          {trimmed}
        </h2>
      );
    }

    // Paragraph
    return (
      <p key={i} className="text-neutral-700 leading-8 mb-4">
        {trimmed}
      </p>
    );
  });
};


const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogs.find((item) => item.slug === slug);

  console.log("Rendered:", blog.title, blog.excerpt);

  if (!blog) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 bg-[#f8fafc]">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Blog Not Found</h1>
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

  const relatedBlogs = blogs
    .filter((item) => item.id !== blog.id)
    .slice(0, 3);

  return (
    <>
    <Helmet prioritizeSeoTags>
  <title>{blog.title}</title>

  <meta
    name="description"  content={blog.excerpt }
   key="description" /></Helmet>
      <section className="bg-[#f8fafc]">

      {/* HERO */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-20">

          {/* Back */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-neutral-500 hover:text-black transition"
          >
            <ArrowLeft size={18} />
            Back To Blogs
          </Link>

          {/* Meta */}
          <div className="mt-8 flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              {blog.category}
            </span>
            <span className="text-neutral-400 text-sm">
              {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight tracking-tight max-w-4xl">
            {blog.title}
          </h1>

          <p className="mt-4 text-neutral-500">
            Published on {blog.date}
          </p>

          {/* Image */}
          <div className="mt-12 relative rounded-3xl overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="w-full object-cover"
            />

          
          </div>
        </div>
      </section>

      {/* ARTICLE */}
      <section className="py-10 ">
        <div className="max-w-7xl mx-auto px-6 ">

          <div className="bg-white shadow-lg  border border-neutral-200 rounded-3xl p-8 md:p-12 ">
           <div className="space-y-2">
  {formatContent(blog.content)}
</div>
          </div>

          {/* CTA */}



           <TeamSupportSection
     heading = " Need Help With DSC, Trademark or ISO?"
     
     supportMessage= " Get professional assistance for Class 3 DSC, Trademark Registration, ISO Certification and Government Tender Services." />




        </div>
      </section>

      {/* RELATED BLOGS */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-semibold tracking-tight">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

            {relatedBlogs.map((item) => (
              <Link
                key={item.id}
                to={`/blog/${item.slug}`}
                className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

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

    </section>
    </>
  
  );
};

export default BlogDetails;