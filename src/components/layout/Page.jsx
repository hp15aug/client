import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowDown } from "lucide-react"

export default function Page() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b bg-white dark:from-gray-900 dark:to-gray-800 dark:text-white">

      {/* Hero Section (Now 30% Height) */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="relative h-[30vh] flex flex-col items-center justify-center text-center px-4"
      >
        <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
          iL7 studios
        </motion.h1>

        <motion.p
          variants={fadeIn}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-2"
        >
          Where Care Meets Creative Vision
        </motion.p>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="space-y-24"
        >
          {/* Our Studio Section */}
          <motion.section variants={fadeIn}>
            <motion.h2
              className="text-3xl sm:text-4xl font-light mb-16 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Our Studio
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                          shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-lg leading-relaxed">
                  An experienced and talented team dedicated to delivering exceptional creative and scientific media
                  production.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm 
                          shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <p className="text-lg leading-relaxed">
                  We are a team of expert medical illustrators and highly skilled 3D artists and compositors with
                  extensive experience in the film and broadcast industry. This combination of artistic talent and
                  scientific expertise allows us to create visually striking work that merges cinematic quality with
                  scientific precision.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Interactive Card Section */}
          <motion.section variants={fadeIn} className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light mb-16">Our Expertise</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerChildren}>
              {["Medical Illustration", "3D Animation", "Scientific Visualization"].map((service, index) => (
                <motion.div
                  key={service}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: 10,
                  }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 
                            dark:from-gray-800 dark:to-gray-900 shadow-xl cursor-pointer"
                >
                  <h3 className="text-xl font-medium mb-4">{service}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bringing complex concepts to life through detailed visualization
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </motion.div>
      </main>
    </div>
  )
}
