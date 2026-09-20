
import React, { useEffect, useState } from "react";
import API from "@/../api/axios";
import { toast } from "sonner";


import BlogList from "./blogs/BlogList";
import BlogForm from "./blogs/BlogForm";

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // =========================
  // GET BLOGS
  // =========================

  const fetchBlogs = async () => {
    try {
      setFetching(true);

      const response = await API.get("/api/blogs");

      setBlogs(response.data.data || []);
    } catch (error) {
      console.error("Fetch blogs error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load blogs"
      );
    } finally {
      setFetching(false);
    }
  };

  // =========================
  // INITIAL FETCH
  // =========================

  useEffect(() => {
    fetchBlogs();
  }, []);

  // =========================
  // DELETE BLOG
  // =========================

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);

      await API.delete(`/api/blogs/${id}`);

      toast.success("Blog deleted successfully");

      setBlogs((prev) =>
        prev.filter((blog) => blog._id !== id)
      );
    } catch (error) {
      console.error("Delete blog error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to delete blog"
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-8">


      <div>
        <h2 className="text-xl md:text-2xl font-bold text-emerald-400">
          Manage Blogs
        </h2>

        <p className="text-sm text-neutral-500 mt-1">
          Create, view and manage your blog posts.
        </p>
      </div>


      <BlogForm
        fetchBlogs={fetchBlogs}
      />

      <BlogList
        blogs={blogs}
        fetching={fetching}
        fetchBlogs={fetchBlogs}
        handleDelete={handleDelete}
        deletingId={deletingId}
      />

    </div>
  );
}

