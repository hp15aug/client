import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";



const Contact = () => {
  const contactRef = useRef(null);

  const handleScroll = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="space-y-8 max-w-5xl">
          {/* Animated Subheading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-gray-400 text-3xl font-light"
          >
            We're iL7 Studios
          </motion.h2>

          {/* Animated Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
          >
            Contact Us
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3.5, delay: 0.6 }}
            className="text-gray-400 text-xl leading-relaxed max-w-3xl"
          >
            If you would like to discuss a project or to find out more about our
            studio and what we can do for your business, please feel free to get
            in touch from the following details.
          </motion.p>

          <motion.button
            onClick={handleScroll}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 4, delay: 0.8 }}
          >
            <button className="px-8 py-4 border border-white rounded-full text-white transition-colors duration-300 my-btn">
              Learn More
            </button>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
