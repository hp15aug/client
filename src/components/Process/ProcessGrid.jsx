import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const workItems = [
  {
    title: "MOA Animation",
    subtitle: "MOA Animation",
    imageUrl: "./assets/thumbnail/moa.jpg",
    category: "Medical Visualization",
    link: "/moa",
  },
  {
    title: "Surgical Animation",
    subtitle: "Surgical Animation",
    imageUrl: "./assets/thumbnail/surani.jpg",
    category: "Showreel",
    link: "/sur-ani",
  },
  {
    title: "Mouthcare Application Video",
    subtitle: "Mouthcare Application Video",
    imageUrl: "./assets/thumbnail/mouthcare.jpg",
    category: "Mouthcare Video",
    link: "/mouth-care",
  },
]

const ProcessGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-between items-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-gray-900 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client's Work
          </motion.h2>

          {/* Gallery Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/gallery"
              className="my-btn bg-black text-white inline-flex rounded-full py-4 px-6"
            >
              View Full Gallery
              <ArrowRight className="ml-4 mt-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {workItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={item.link} className="block">
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="h-full w-full"
                  >
                    <div className="relative w-full h-full overflow-hidden group">
                      <Image
                        src={item.imageUrl || "/placeholder.svg"}
                        alt={item.title}
                        className="absolute top-0 left-0 w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
                <div className="mt-3 sm:mt-4 space-y-1 sm:space-y-2">
                  <motion.h3
                    className="text-lg sm:text-xl font-medium text-gray-900"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-xs sm:text-sm text-gray-500">{item.subtitle}</p>
                  <motion.span
                    className="inline-block text-xs font-medium text-gray-400 tracking-wider uppercase"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {item.category}
                  </motion.span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default ProcessGrid