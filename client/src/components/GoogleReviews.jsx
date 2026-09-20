import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://widgets.sociablekit.com/google-reviews/widget.js";

    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-sm font-medium text-blue-600">
            Google Reviews
          </p>

          <h2 className="mt-2 text-4xl font-semibold">
            What Our Customers Say
          </h2>
        </div>

        <div
          className="sk-ww-google-reviews"
          data-embed-id="25714230"
        ></div>

      </div>
    </section>
  );
};

export default GoogleReviews;