
import React, { useState } from "react";
import API from "@/../api/axios";
import { toast } from "sonner";

const BlogForm = ({ fetchBlogs }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("DSC");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // =========================
  // GENERATE SLUG
  // =========================

  const handleTitleChange = (e) => {
    const value = e.target.value;

    setTitle(value);

    const generatedSlug = value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    setSlug(generatedSlug);
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!coverImage) {
      return toast.error(
        "Please select a cover image"
      );
    }

    if (!title.trim() || !slug.trim() || !content.trim()) {
      return toast.error(
        "Please fill in all required fields"
      );
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title.trim());
      formData.append("slug", slug.trim());
      formData.append("category", category);
      formData.append("excerpt", excerpt.trim());
      formData.append("content", content.trim());
      formData.append("coverImage", coverImage);

      await API.post(
        "/api/blogs/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(
        "Blog published successfully!"
      );

      // Reset form

      setTitle("");
      setSlug("");
      setCategory("DSC");
      setExcerpt("");
      setContent("");
      setCoverImage(null);

      // Refresh existing blogs

      await fetchBlogs();

    } catch (error) {
      console.error(
        "Create blog error:",
        error
      );

      toast.error(
        error.response?.data?.message ||
          "Failed to publish blog post"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">

      <h3 className="text-lg font-semibold text-white">
        Create New Blog Post
      </h3>

      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-4 md:p-6 rounded-xl border border-neutral-800 space-y-4"
      >

        {/* TITLE */}

        <div>
          <label className="block text-xs text-neutral-400 mb-1">
            Blog Title
          </label>

          <input
            type="text"
            placeholder="e.g. How to install Class 3 Digital Signature Certificate"
            value={title}
            onChange={handleTitleChange}
            className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
            required
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              URL Slug
            </label>

            <input
              type="text"
              value={slug}
              onChange={(e) =>
                setSlug(e.target.value)
              }
              className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-neutral-300"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-neutral-400 mb-1">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white"
            >
              <option value="DSC">
                Digital Signature
              </option>

              <option value="Trademark">
                Trademark
              </option>

              <option value="ISO">
                ISO Certification
              </option>

              <option value="Taxes">
                Taxation & Income Tax
              </option>
            </select>
          </div>

        </div>

        {/* EXCERPT */}

        <div>
          <label className="block text-xs text-neutral-400 mb-1">
            Short Excerpt (Summary)
          </label>

          <textarea
            value={excerpt}
            onChange={(e) =>
              setExcerpt(e.target.value)
            }
            placeholder="Brief introduction for blog listing card..."
            className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white h-20 resize-none"
            required
          />
        </div>

        {/* COVER IMAGE */}

        <div>
          <label className="block text-xs text-neutral-400 mb-1">
            Cover Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setCoverImage(
                e.target.files?.[0] || null
              )
            }
            className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded text-sm text-neutral-300"
            required
          />

          {coverImage && (
            <p className="text-xs text-neutral-500 mt-1">
              Selected: {coverImage.name}
            </p>
          )}
        </div>

        {/* CONTENT */}

        <div>
          <label className="block text-xs text-neutral-400 mb-1">
            Full Blog Content
          </label>

          <textarea
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="Write blog content here..."
            className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded text-sm text-white h-48 resize-y"
            required
          />
        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded font-semibold text-sm text-white transition-all"
        >
          {loading
            ? "Publishing Blog..."
            : "Publish Blog Post"}
        </button>

      </form>

    </div>
  );
};

export default BlogForm;