import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const VideoSection = ({ poster, video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const containerRef = useRef(null);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ignore key events on inputs or textareas
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

      switch (e.key.toLowerCase()) {
        case " ":
          e.preventDefault();
          togglePlay();
          break;
        case "f":
          handleFullscreen();
          break;
        case "m":
          toggleMute();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Sync isPlaying state with the video's actual state
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    videoEl.addEventListener("play", handlePlay);
    videoEl.addEventListener("pause", handlePause);

    return () => {
      videoEl.removeEventListener("play", handlePlay);
      videoEl.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .catch((err) => console.error("Error attempting to play:", err));
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) {
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  const handleContainerClick = (e) => {
    // Only toggle play if clicking on the container itself, not the video or controls
    if (e.target === containerRef.current) {
      togglePlay();
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-black"
      onClick={handleContainerClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        controls
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Large Center Play Button (only visible when paused) */}
      {!isPlaying && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the click from bubbling to the container
            togglePlay();
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-24 h-24 flex items-center justify-center
                     bg-white/10 hover:bg-[#3ab3e1] transition-colors rounded-full z-20"
          aria-label="Play video"
        >
          <Play
            size={48}
            className="text-white transition-transform duration-300"
          />
        </button>
      )}

      {/* Centered Logo/Text Overlay (Animated on Play/Pause) */}
      <AnimatePresence mode="wait">
        {!isPlaying && (
          <motion.div
            key="overlay-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-10"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-wider">
              iL7 Studios
            </h1>
            <p className="text-white/80 mt-4 text-lg">il7studios.com</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoSection;