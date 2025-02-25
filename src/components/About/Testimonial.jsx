import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I had an amazing experience working with iL7 Studio on a 3D modeling project for my app, MouthCare. Their work was truly exceptional, showcasing incredible artistic talent and attention to detail. They were highly professional, receptive to feedback, and willing to make multiple revisions to ensure the final result was exactly what I envisioned. Their ability to combine technical expertise with artistic vision is remarkable, and the communication throughout the process was seamless. I couldn't be happier with the outcome and highly recommend iL7 Studio to anyone looking for top-notch 3D modeling services. Thank you for your outstanding work!",
    name: "Romainbroo",
  },
  {
    text: "Absolutely incredible work! The 3D editing was top-notch, and the attention to detail exceeded my expectations. The project was completed quickly and professionally, with great communication throughout. This freelancer truly understands the creative process and brought my vision to life in a way that was both impressive and seamless. I highly recommend their services to anyone looking for high-quality 3D editing. I'll definitely be back for future projects!",
    name: "Yanhuasappin",
  },
  {
    text: "WOW, iL7 Studio nailed it! Incredible creativity, flawless professionalism, and AMAZING attention to detail in their video work. Plus, working with them was a breeze—polite, fluent, and always proactive—definitely worth it! Hs",
    name: "Ivan Turkin",
  },
  {
    text: "Gave us exactly what were were looking for. Proactively reached out with progress of the product and checked in to make sure everything he was making aligned with what we wanted. Helped with any questions we had for integration.",
    name: "Thedon543",
  },
  {
    text: "Easy to communicate with and takes corrections positively when I need revisions for the original work. Delivery time for his work is also good compared to how long 3d videos take. I will work with him next time",
    name: "Kiguthadeus",
  },
  {
    text: "iL7 Studio really saved me, deliverd the job with a very short deadline. Very satisfied",
    name: "Braga1208",
  },
  {
    text: "Exceptional work and patience. Would like to work with iL7 Studios again in the future",
    name: "WaiChang",
  },
  {
    text: "He did very well and delivered on time as well. We recommend him for your project",
    name: "Fiona",
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div 
      id="testimonial" 
      className="bg-black min-h-[700px] flex flex-col items-center py-10 text-center relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Client Testimonials Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-white my-12"
      >
        Client Testimonials
      </motion.h1>
      
      <div className="w-4/5 md:w-2/3 lg:w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-20 text-xl italic text-white">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="text-gray-400 pt-10">- {testimonials[currentIndex].name}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* New Stylish Navigation Buttons */}
      <div className="absolute bottom-[100px] flex space-x-4">
        <button
          onClick={prevTestimonial}
          className="p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-500 transition"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-500 transition transform hover:scale-110"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;