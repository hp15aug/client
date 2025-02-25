import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutHovered, setIsAboutHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [ "Showreel","Work", "About", "Contact"];

  const aboutDropdownItems = [
    { title: "About Us", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Our Process", path: "/process" },
    { title: "Our Team", path: "/team" }
  ];

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 10 }
  };

  return (
    <header
      className={`w-full py-6 px-8 flex justify-between items-center fixed top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <Link to="/">
        <motion.div
          // Animate the color so that it updates when isScrolled changes.
          animate={{ color: isScrolled ? "#000000" : "#ffffff" }}
          className="text-xl sm:text-3xl font-light tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          iL7 Studios
        </motion.div>
      </Link>
      
      <nav>
        <ul className="flex gap-8 items-center">
          {navItems.map((item) => (
            <li
              key={item}
              className={`relative ${item === "Contact" ? "hidden md:block" : ""}`}
              onMouseEnter={() => item === "About" && setIsAboutHovered(true)}
              onMouseLeave={() => item === "About" && setIsAboutHovered(false)}
            >
              {item === "About" ? (
                <>
                  <motion.span
                    animate={{ color: isScrolled ? "#000000" : "#ffffff" }}
                    whileHover={{ color: "#3ab3e1" }}
                    className="cursor-pointer font-bold"
                  >
                    {item}
                  </motion.span>

                  <AnimatePresence>
                    {isAboutHovered && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className={`absolute top-full left-0 mt-2 py-2 px-4 rounded-lg shadow-lg ${
                          isScrolled ? 'bg-white' : 'bg-black/90'
                        }`}
                        style={{ minWidth: '200px' }}
                      >
                        {aboutDropdownItems.map((dropdownItem) => (
                          <motion.div
                            key={dropdownItem.title}
                            variants={itemVariants}
                            whileHover={{ x: 10, color: "#3ab3e1" }}
                            className="py-2"
                          >
                            <Link
                              to={dropdownItem.path}
                              // For dropdown items, we update the text color via inline style.
                              style={{ color: isScrolled ? "#000000" : "#ffffff" }}
                              className="block whitespace-nowrap transition-colors"
                            >
                              {dropdownItem.title}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link to={`/${item.toLowerCase()}`}>
                  <motion.span
                    animate={{ color: isScrolled ? "#000000" : "#ffffff" }}
                    whileHover={{ color: "#3ab3e1" }}
                    whileTap={{ scale: 0.95 }}
                    className="font-bold"
                  >
                    {item}
                  </motion.span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
