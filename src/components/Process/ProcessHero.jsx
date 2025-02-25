import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProcessHero = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-32">
        <div className="space-y-8 max-w-5xl">
          {/* Animated Services Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-xl md:text-4xl font-normal mb-16 tracking-tight"
          >
            Our Production Process
          </motion.h3>

          {/* Animated Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-normal mb-16 tracking-tight"
          >
            A Flexible, Innovative, and Results-Oriented Approach
          </motion.h1>

          {/* Animated Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.6 }}
            className="max-w-[1200px]"
          >
            <p className="text-lg md:text-2xl leading-relaxed">

              We embrace the individuality of each client, shaping our work to
              align with their needs, workflows, and culture. Our approach is
              fueled by strategic insight, creative excellence, and a deep
              commitment to delivering exceptional results.
            </p>
          </motion.div>
          {/* Animated Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="pt-8"
          >
            <button onClick={() => navigate("/contact")} className="px-8 py-4 border border-white rounded-full transition-colors duration-100 my-btn">
              Start a project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
