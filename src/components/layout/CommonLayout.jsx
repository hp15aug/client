import React from 'react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';

const CommonLayout = ({ title, subtitle, content }) => {
  const navigate = useNavigate();
  return (
    <div className="flex bg-black text-white min-h-screen w-screen overflow-hidden">
      <div className="max-w-[1400px] mx-auto h-screen flex flex-col justify-center px-4 relative">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-xl md:text-4xl font-normal mb-16 tracking-tight"
        >
          {title}
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-normal mb-16 tracking-tight"
        >
          {subtitle}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="max-w-[1200px]"
        >
          <p className="text-lg md:text-2xl leading-relaxed">
            {content}
          </p>
        </motion.div>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="pt-8"
        >
          <button onClick={() => navigate("/contact")} className="px-8 py-4 border border-white rounded-full transition-colors duration-100 my-btn">
            Start a project
          </button>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0] }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </motion.div>
    </div>
  )
}

export default CommonLayout