import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const teamMembers = [
  {
    name: "AQUIB ZAFAR",
    role: "FOUNDER",
    image: "./assets/team/founder.jpg"
  },
  {
    name: "NAHID AFRIN",
    role: "VP - Business Development and Client Engagement",
    image: "./assets/team/vp.jpg"
  },
  {
    name: "DINESH ",
    role: "CREATIVE DIRECTOR",
    image: "./assets/team/creative-director.jpg"
  },
  {
    name: "VAIBHAB",
    role: "SENIOR ARTIST",
    image: "./assets/team/sa1.jpg"
  },
  {
    name: "GYANESH",
    role: "SENIOR ARTIST",    
    image: "./assets/team/sa2.jpg"
  },
];

export default function TeamSection() {
  const navigate = useNavigate();
  
  return (
    <section className="bg-black text-white min-h-screen w-full overflow-hidden py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-lg md:text-4xl font-normal mb-16 tracking-tight mt-20"
          >
            We're iL7 Studios
          </motion.h3>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-normal mb-16 tracking-tight"
          >
            Our People
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, delay: 0.6 }}
            className="max-w-[1200px]"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              Every project thrives on the exceptional talent and expertise of
              our team, whose dedication to cutting-edge design and scientific
              precision serves global clients in healthcare, science, and
              medical marketing communications.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full aspect-[3/4] mb-2 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-light mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">
                {member.role} <span className="ml-1">+</span>
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight mt-36">
          Achieving excellence through projects driven by mutual trust,
          collaborative spirit, and strategic partnerships.
        </div>

        <div className="py-16 flex flex-wrap gap-4">
          <button 
            className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 w-56"
            onClick={() => navigate('/work')}
          >
            See the Work
          </button>
          <button 
            className="px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-colors duration-300 w-56"
            onClick={() => navigate('/showreel')}
          >
            Watch the Showreel
          </button>
        </div>
      </div>
    </section>
  );
}