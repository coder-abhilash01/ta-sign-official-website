
import React, { useEffect, useState } from "react";
import API from "@/../api/axios";
import { toast } from "sonner";

export default function HeroManager() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [currentImage, setCurrentImage] = useState("");
  const [image, setImage] = useState(null);

  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);

  // =========================
  // GET CURRENT HERO
  // =========================

  const fetchHero = async () => {
    try {
      setFetching(true);

      const response = await API.get("/api/content/hero");

      const hero = response.data.data;

      setTitle(hero?.title || "");
      setSubtitle(hero?.subtitle || "");
      setCurrentImage(hero?.image?.url || "");

    } catch (error) {
      console.error("Fetch hero error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to load hero content"
      );
    } finally {
      setFetching(false);
    }
  };

  // =========================
  // FETCH ON COMPONENT LOAD
  // =========================

  useEffect(() => {
    fetchHero();
  }, []);

  // =========================
  // IMAGE SELECT
  // =========================

  const handleImageChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    if (!selectedFile.type.startsWith("image/")) {
      toast.error("Please select a valid image");
      return;
    }

    setImage(selectedFile);
  };

  // =========================
  // UPDATE HERO
  // =========================

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return toast.error("Headline title is required");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title.trim());
      formData.append("subtitle", subtitle.trim());

      // Only send image when admin selects a new image
      if (image) {
        formData.append("image", image);
      }

      await API.put("/api/content/hero", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Hero section updated successfully");

      // Get latest data from backend
      await fetchHero();

      // Clear selected file
      setImage(null);

    } catch (error) {
      console.error("Update hero error:", error);

      toast.error(
        error.response?.data?.message ||
          "Failed to update hero content"
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOADING
  // =========================

  if (fetching) {
    return (
      <div className="space-y-6 max-w-2xl">

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-emerald-400">
            Edit Hero Section
          </h2>

          <p className="text-sm text-neutral-500 mt-1">
            Manage the content displayed on your homepage.
          </p>
        </div>

        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center text-sm text-neutral-500">
          Loading hero content...
        </div>

      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-2xl">


      <div>
        <h2 className="text-xl md:text-2xl font-bold text-emerald-400">
          Edit Hero Section
        </h2>

        <p className="text-sm text-neutral-500 mt-1">
          Manage the content displayed on your homepage.
        </p>
      </div>



      <form
        onSubmit={handleUpdate}
        className="bg-neutral-900 p-4 md:p-6 rounded-xl border border-neutral-800 space-y-5"
      >

    

        <div>
          <label className="block text-xs text-neutral-400 mb-2">
            Current Hero Image
          </label>

          {currentImage ? (
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">

              <img
                src={currentImage}
                alt="Current hero"
                className="w-full h-48 object-cover"
              />

            </div>
          ) : (
            <div className="h-40 rounded-lg border border-neutral-800 bg-neutral-950 flex items-center justify-center">
              <p className="text-sm text-neutral-600">
                No hero image uploaded
              </p>
            </div>
          )}
        </div>


        <div>
          <label className="block text-xs text-neutral-400 mb-1.5">
            Headline Title
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter headline title"
            className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder:text-neutral-600 outline-none focus:border-emerald-500 transition"
            required
          />
        </div>


        <div>
          <label className="block text-xs text-neutral-400 mb-1.5">
            Subtitle
          </label>

          <textarea
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter subtitle"
            className="w-full p-2.5 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-white placeholder:text-neutral-600 outline-none focus:border-emerald-500 transition resize-none h-24"
          />
        </div>


        <div>
          <label className="block text-xs text-neutral-400 mb-1.5">
            Replace Hero Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm text-neutral-300"
          />

          <p className="text-[11px] text-neutral-600 mt-1.5">
            Leave empty if you don't want to change the current image.
          </p>
        </div>

      

        {image && (
          <div className="flex items-center justify-between gap-3 bg-neutral-800 border border-neutral-700 rounded-lg p-3">

            <div className="min-w-0">
              <p className="text-xs text-neutral-300 truncate">
                {image.name}
              </p>

              <p className="text-[11px] text-neutral-600 mt-1">
                {(image.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>

            <button
              type="button"
              onClick={() => setImage(null)}
              className="text-xs text-red-400 hover:text-red-300 shrink-0"
            >
              Remove
            </button>

          </div>
        )}


        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-sm text-white transition-all"
        >
          {loading
            ? "Saving Changes..."
            : "Save Hero Changes"}
        </button>

      </form>

    </div>
  );
}

