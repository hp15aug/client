import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate();
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="space-y-8 max-w-5xl">
          {/* Animated Subheading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="text-xl md:text-4xl font-normal mb-16 tracking-tight"
            >
              We're iL7 Studios
            </motion.h3>

          {/* Animated Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight"
          >
            Setting the Global Standard for Medical Animation & Digital Design
            in Healthcare
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-gray-400 text-xl leading-relaxed max-w-3xl"
          >
            ​Our mission is to transform the science and innovation behind your
            product into engaging, impactful communication that reaches
            patients, healthcare providers, and investors at every stage—from
            pre-clinical to post-market.
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="pt-8"
          >
            <button onClick={()=> navigate("/contact")} className="px-8 py-4 border border-white rounded-full transition-colors duration-300 my-btn">
              Start a project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
