import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PageSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);



  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="bg-white text-black w-full min-h-screen flex items-start justify-center">
      <div className="relative w-[800px] h-[800px] overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={prevPage}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 
                   bg-white/80 p-4 rounded-full shadow-lg hover:bg-white 
                   transition-all duration-300 hover:scale-110 z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextPage}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 
                   bg-white/80 p-4 rounded-full shadow-lg hover:bg-white 
                   transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Page Content */}
        <AnimatePresence initial={false} custom={currentPage}>
          <motion.div
            key={currentPage}
            custom={currentPage}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 flex flex-col items-center justify-center 
                     px-12 text-left bg-gradient-to-br from-white to-gray-50"
          >

            {/* Content */}
            <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r 
                        from-black to-gray-700 bg-clip-text text-transparent">
              {pages[currentPage].title}
            </h1>

            <div className="space-y-8">
              {pages[currentPage].subheadings.map((subheading, index) => (
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-2xl font-medium text-gray-700 mx-10"
                >
                  {subheading}
                </motion.h2>
              ))}
            </div>

            {/* Page Number */}
            <div className="absolute bottom-8 right-8 font-mono text-lg">
              {currentPage + 1}/{pages.length}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PageSlider;