
import React from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import ConfirmationDialog from "../ConfirmationDialog";

const BlogList = ({
  blogs = [],
  fetching = false,
  fetchBlogs,
  handleDelete,
  deletingId,
}) => {
  return (
    <div className="space-y-4">


      <div className="flex items-center justify-between">

        <h3 className="text-lg font-semibold text-white">
          Existing Blogs
        </h3>

        <button
          type="button"
          onClick={fetchBlogs}
          disabled={fetching}
          className="text-xs px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-300 disabled:opacity-50 transition"
        >
          {fetching ? "Refreshing..." : "Refresh"}
        </button>

      </div>


      {fetching && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center text-sm text-neutral-500">
          Loading blogs...
        </div>
      )}

    

      {!fetching && blogs.length === 0 && (
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center text-sm text-neutral-500">
          No blogs published yet.
        </div>
      )}

     

      {!fetching && blogs.length > 0 && (
        <div className="space-y-3">

          {blogs.map((blog) => (

            <div
              key={blog._id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-4 md:p-5"
            >

              <div className="flex flex-col md:flex-row gap-4">

      

                <div className="shrink-0">

                  {blog.coverImage?.url ? (
                    <img
                      src={blog.coverImage.url}
                      alt={blog.title}
                      className="w-full md:w-40 h-28 object-cover rounded-lg border border-neutral-800"
                    />
                  ) : (
                    <div className="w-full md:w-40 h-28 rounded-lg bg-neutral-800 flex items-center justify-center text-xs text-neutral-600">
                      No image
                    </div>
                  )}

                </div>

                <div className="flex-1 min-w-0">

                  <h4 className="font-semibold text-white text-base truncate">
                    {blog.title}
                  </h4>


                  <div className="flex flex-wrap items-center gap-2 mt-2">

                    {blog.category && (
                      <span className="text-xs px-2 py-1 rounded bg-emerald-500/10 text-emerald-400">
                        {blog.category}
                      </span>
                    )}

                    {blog.createdAt && (
                      <span className="text-xs text-neutral-600">
                        {new Date(
                          blog.createdAt
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    )}

                  </div>

                  {/* EXCERPT */}

                  {blog.excerpt && (
                    <p className="text-sm text-neutral-500 mt-2 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}

                  {/* SLUG */}

                  {blog.slug && (
                    <p className="text-xs text-neutral-700 mt-2 truncate">
                      /blog/{blog.slug}
                    </p>
                  )}

                </div>

        

                <div className="flex md:flex-col gap-2 md:justify-center shrink-0">

                  {/* VIEW */}

                  {blog.slug && (
                    <a
                      href={`/blog/${blog.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-xs rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-center transition"
                    >
                      View
                    </a>
                  )}

                  {/* DELETE */}

                  <AlertDialog>

                    <AlertDialogTrigger asChild>

                      <button
                        type="button"
                        disabled={deletingId === blog._id}
                        className="px-3 py-2 text-xs rounded bg-red-600/10 hover:bg-red-600/20 text-red-400 disabled:opacity-50 transition"
                      >
                        {deletingId === blog._id
                          ? "Deleting..."
                          : "Delete"}
                      </button>

                    </AlertDialogTrigger>

                    <ConfirmationDialog
                      title="Delete blog?"
                      description={`Are you sure you want to delete "${blog.title}"? This action cannot be undone.`}
                      onConfirm={() =>
                        handleDelete(blog._id)
                      }
                    />

                  </AlertDialog>

                </div>

              </div>

            </div>

          ))}

        </div>
      )}

    </div>
  );
};

export default BlogList;