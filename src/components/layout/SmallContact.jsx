import React from "react";
import { useNavigate } from "react-router-dom";

const SmallContact = () => {
  const navigate = useNavigate();  // Using the navigate hook

  return (
    <div className="bg-[#f7f0e8]">
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-normal mb-6 max-w-4xl">
          Need help with a project?
        </h1>
        <p className="text-xl mb-8">
          Get in touch and start your creative journey.
        </p>
        <button
          onClick={() => navigate("/contact")}  // Use navigate() on button click
          className="my-btn rounded-full px-8 py-6 text transition-colors font-sans justify-center gap-2 items-center shadow-xl text-lg"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SmallContact;
