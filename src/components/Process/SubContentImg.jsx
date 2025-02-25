import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SubContentImg = ({ 
  img = "",
  img1 = [], 
  img2 = [],
  feedback = "", 
  clientImg = ""
}) => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const images = [...img1, ...img2];
  const mod = (n, m) => ((n % m) + m) % m;
  
  const index1 = mod(page, images.length);
  const index2 = mod(page + 1, images.length);
  const index3 = mod(page + 2, images.length);

  // Corrected slide variants:
  const slideVariants = {
    enterLeft: {
      x: -1000,
      opacity: 0
    },
    enterRight: {
      x: 1000,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    // When moving right, old slide exits to the left (x: -1000)
    exitLeft: {
      x: -1000,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    },
    // When moving left, old slide exits to the right (x: 1000)
    exitRight: {
      x: 1000,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    // Change the page by 3 images at a time (wraps using mod)
    setPage(prev => mod(prev + (newDirection * 3), images.length));
  };

  return (
    <main>
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 relative">
            <div className="relative overflow-hidden">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={page}
                  variants={slideVariants}
                  initial={direction > 0 ? "enterRight" : "enterLeft"}
                  animate="visible"
                  exit={direction > 0 ? "exitLeft" : "exitRight"}
                  className="flex gap-4"
                >
                  <div className="relative h-[400px] w-1/3">
                    <img
                      src={images[index1]}
                      alt={`Image ${index1 + 1}`}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                  <div className="relative h-[400px] w-1/3">
                    <img
                      src={images[index2]}
                      alt={`Image ${index2 + 1}`}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                  <div className="relative h-[400px] w-1/3">
                    <img
                      src={images[index3]}
                      alt={`Image ${index3 + 1}`}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Left Navigation Button */}
            <button
              onClick={() => paginate(-1)}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Right Navigation Button */}
            <button
              onClick={() => paginate(1)}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="max-w-4xl mx-auto text-left">
            <div className="text-9xl font-bold text-gray-500 mb-4">"</div>
            <blockquote className="text-3xl font-medium leading-relaxed mb-8">
              {feedback}
            </blockquote> 
            <cite className="text-gray-400 font-normal">{clientImg}</cite>
          </div>
          <img
              src={img}
              alt="Creative Work"
              className=" mx-auto mt-20 h-[100px]  object-cover rounded-3xl"
            />
        </div>
      </section>
    </main>
  );
};

export default SubContentImg;
