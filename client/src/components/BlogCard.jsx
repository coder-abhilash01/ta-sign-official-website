import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <article
      className="
      group
      bg-white
      border
      border-neutral-200
      rounded-3xl
      overflow-hidden
      hover:border-neutral-300
      hover:-translate-y-1
      hover:shadow-lg
      transition-all
      duration-300
    "
    >
      {/* IMAGE */}

      <div className="overflow-hidden h-[240px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="
          w-full
          h-full
          object-cover
          group-hover:scale-105
          transition-transform
          duration-500
        "
        />
      </div>

      {/* CONTENT */}

      <div className="p-6">
        {/* TOP INFO */}

        <div className="flex items-center justify-between gap-3">
          <span
            className="
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
            bg-blue-50
            text-blue-700
          "
          >
            {blog.category}
          </span>

          <span className="text-sm text-neutral-500">
            {blog.readTime}
          </span>
        </div>

        {/* TITLE */}

        <h2
          className="
          mt-5
          text-2xl
          font-semibold
          tracking-tight
          text-neutral-900
          line-clamp-2
        "
        >
          {blog.title}
        </h2>

        

        <p
          className="
          mt-4
          text-neutral-600
          leading-relaxed
          line-clamp-3
        "
        >
          {blog.excerpt}
        </p>

        {/* FOOTER */}

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-neutral-500">
            {blog.date}
          </span>

          <Link
            to={`/blog/${blog.slug}`}
            className="
            flex
            items-center
            gap-2
            text-[#0040FA]
            font-medium
          "
          >
            Read Article

            <ArrowUpRight
              size={18}
              className="
              group-hover:translate-x-1
              group-hover:-translate-y-1
              transition-all
            "
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;