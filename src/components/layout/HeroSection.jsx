import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const VideoBackground = ({ src }) => (
  <motion.div
    className="absolute inset-0 w-full h-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <video
      className="absolute inset-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      poster="/api/placeholder/1920/820"
    >
      <source src={src} type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black/40" />
  </motion.div>
);

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();    
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  // Add viewport height listener
  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', updateHeight);
    // Update height on orientation change for mobile devices
    window.addEventListener('orientationchange', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, []);

  const carouselData = [
    {
      video: "./assets/test.mp4",
      title: "Where Care Meets Creative Vision",
      content: "We are dedicated to crafting high-end medical animations and innovative digital media solutions tailored for the pharmaceutical industry, healthcare communications, and medical education",
      buttonText: "Watch the Showreel",
      route: "/showreel"
    },
    {
      video: "./assets/test2.mp4",
      title: "3D Medical Animations",
      content: "Experience the future of medical visualization through our cutting-edge 3D animations. We transform complex medical concepts into clear, engaging visual stories that educate and inspire.",
      buttonText: "View Our Projects",
      route: "/work"
    },
    {
      video: "./assets/test3.mp4",
      title: "Surgical Innovations",
      content: "Witness surgical procedures come to life through our detailed animations. We specialize in visualizing intricate techniques and advanced medical devices with unprecedented clarity.",
      buttonText: "Explore Surgical",
      route: "/surgical"
    },
    {
      video: "./assets/test4.mp4",
      title: "Augmented Reality",
      content: "Step into the future with our AR solutions. Transform static content into interactive 3D experiences that engage and educate through the power of immersive technology.",
      buttonText: "Discover AR",
      route: "/arvr"
    }
  ];

  // Rest of your animation variants remain the same
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, carouselData.length]);

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height: `${viewportHeight}px` }}
    >
      <AnimatePresence initial={false}>
        <VideoBackground key={currentSlide} src={carouselData[currentSlide].video} />
      </AnimatePresence>

      <motion.div
        className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="w-full max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
              className="text-center space-y-4 sm:space-y-6 md:space-y-8"
            >
              <motion.h1
                className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white tracking-wider px-2 sm:px-4"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { delay: 0.2 } }
                }}
              >
                {carouselData[currentSlide].title}
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto px-2 sm:px-4"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { delay: 0.4 } }
                }}
              >
                {carouselData[currentSlide].content}
              </motion.p>

              <motion.button
                onClick={() => navigate(carouselData[currentSlide].route)}
                className="mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-bold
                          text-sm sm:text-base
                          hover:bg-[#3ab3e1] hover:text-white transition-all duration-300
                          hover:scale-105 hover:shadow-lg"
                variants={{
                  visible: { y: 0, opacity: 1, transition: { delay: 1 } }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {carouselData[currentSlide].buttonText}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group"
              aria-label={`Go to slide ${index + 1}`}
            >
              <motion.div
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white w-4 sm:w-6" : "bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;