import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

function ContactContent() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openForm = () => setIsContactFormOpen(true);
  const closeForm = () => setIsContactFormOpen(false);

  // Variants for staggering and item animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id='contact' className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-32">
        {/* Header Section */}
        <div className="text-center mb-8">
          <p className="text-3xl text-black leading-relaxed mb-8">
            Please get in touch with any questions, enquiries or project details and a member of our
            team will get back to you as soon as possible.
          </p>

          <motion.button
            onClick={openForm}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex px-6 py-3 bg-black text-white rounded-full transition-all hover:bg-black/90 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3ab3e1] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 overflow-hidden"
          >
            Get in touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.button>
        </div>

        {/* Image Section
        <div className="mt-[200px]">
          <motion.img
            src="./assets/work.jpg"
            alt="Office space"
            className="w-full h-96 object-cover  rounded-[5%] shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div> */}

        {/* Contact Details Section */}
        <motion.div
          className="mt-12 bg-white p-8 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6 leading-tight">
            Contact Details
          </motion.h2>

          {/* Address */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-4 mb-6"
          >
            <div className="bg-white border border-black p-3 rounded-full">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-black text-lg">
                iL7 Studios
              </h3>
              <p className="text-black">A/B 9 ADDA, West Bengal,</p>
              <p className="text-black">Asanol/713302 , India</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-4 mb-6"
          >
            <div className="bg-white border border-black p-3 rounded-full">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className='pt-2'>
              <a
                href="mailto:il7studiosbusiness@gmail.com"
                className="text-black hover:text-gray-600 text-lg"
              >
                il7studiosbusiness@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Phone Numbers */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex items-start space-x-4"
          >
            <div className="bg-white border border-black p-3 rounded-full">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="pt-2">
              <p className="text-black text-lg">
                <span className="font-semibold">India:</span>{' '}
                <a
                  href="tel:+917019619995"
                  className="text-black hover:text-gray-600"
                >
                  +91 7019619995
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <ContactForm isOpen={isContactFormOpen} onClose={closeForm} />
    </div>
  );
}

export default ContactContent;
