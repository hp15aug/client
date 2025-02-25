import React from 'react';

const Explore = () => {
  const PROCESS_SECTION = {
    EXPLORE: {
      IMAGE: "./assets/process/explore.jpg",
      STEP_1_DISCOVERY: [
        "Identify communication objectives",
        "Determine design aspirations",
        "Establish timeline, budget, and resources",
        "Define project purpose",
      ],
      STEP_2_INSIGHT_AND_RESEARCH: [
        "Conduct internal review of references and source materials",
        "Perform scientific research to gather accurate information",
        "Define the current state and identify areas for improvement",
      ],
      STEP_3_VISUAL_STORYTELLING: [
        "Use research insights to create a solid and accurate visual story",
        "Develop a narrative that effectively communicates the message",
      ],
    },
    STRUCTURE: {
      IMAGE: "./assets/process/structure.jpg",
      DETAILS: [
        "Client-centricity: Embracing each client's unique needs and individuality",
        "Flexibility: Adapting to clients' workflows and cultures",
        "Strategic insight: Informing work with data-driven perspectives",
        "Creative excellence: Delivering high-quality, innovative solutions",
        "Commitment to results: Prioritizing exceptional outcomes for clients",
      ],
    },
    DEVELOP: {
      IMAGE: "./assets/process/development.jpg",
      STRATEGIC_ELEMENTS: [
        "Strategic planning",
        "Collaboration",
        "Multidisciplinary design approach",
        "Dedicated project management",
        "Experienced creative direction",
      ],
      TEAM_EXPERTISE: [
        "3D animation",
        "Illustration",
        "Development",
      ],
      DESCRIPTION:
        "By combining strategic planning, creative expertise, and collaborative project management, " +
        "we deliver high-quality visual solutions that effectively communicate complex scientific information.",
    },
    DELIVER: {
      IMAGE: "./assets/process/delivery.jpg",
      PRINCIPLES: [
        "Creativity and precision: Balancing artistic vision with scientific accuracy",
        "Exceptional quality: Striving for high production values, striking design, and attention to detail",
        "Innovation and timelessness: Creating pieces that remain relevant and engaging over time",
        "Storytelling and engagement: Weaving compelling scientific narratives that educate and captivate audiences",
      ],
      DESCRIPTION:
        "We craft innovative, timeless pieces designed to inspire and engage audiences, " +
        "weaving compelling scientific stories that both educate and captivate.",
    },
  };

  const Section = ({ title, children, image, imageAlt }) => (
    <div className="flex flex-col lg:flex-row py-24 border-b border-gray-100">
      <div className="w-full lg:w-1/2 pr-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">{title}</h2>
        {children}
      </div>
      <div className="w-full lg:w-1/2 flex pl-20">
        <div className="w-[550px] h-[400px] rounded-xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  const BulletList = ({ items }) => (
    <ul className="space-y-6">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-blue-500 text-xl mr-3 flex-shrink-0">•</span>
          <span className="text-gray-600 text-lg text-justify">{item}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Explore Section */}
        <Section
          title="Explore"
          image={PROCESS_SECTION.EXPLORE.IMAGE}
          imageAlt="Explore illustration"
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Step 1: Discovery
              </h3>
              <BulletList items={PROCESS_SECTION.EXPLORE.STEP_1_DISCOVERY} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Step 2: Insight & Research
              </h3>
              <BulletList items={PROCESS_SECTION.EXPLORE.STEP_2_INSIGHT_AND_RESEARCH} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Step 3: Visual Storytelling
              </h3>
              <BulletList items={PROCESS_SECTION.EXPLORE.STEP_3_VISUAL_STORYTELLING} />
            </div>
          </div>
        </Section>

        {/* Structure Section */}
        <Section
          title="Structure"
          image={PROCESS_SECTION.STRUCTURE.IMAGE}
          imageAlt="Structure illustration"
        >
          <BulletList items={PROCESS_SECTION.STRUCTURE.DETAILS} />
        </Section>

        {/* Develop Section */}
        <Section
          title="Develop"
          image={PROCESS_SECTION.DEVELOP.IMAGE}
          imageAlt="Develop illustration"
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Strategic Elements
              </h3>
              <BulletList items={PROCESS_SECTION.DEVELOP.STRATEGIC_ELEMENTS} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Team Expertise
              </h3>
              <BulletList items={PROCESS_SECTION.DEVELOP.TEAM_EXPERTISE} />
            </div>
            <p className="text-xl text-gray-600 text-justify">
              {PROCESS_SECTION.DEVELOP.DESCRIPTION}
            </p>
          </div>
        </Section>

        {/* Deliver Section */}
        <Section
          title="Deliver"
          image={PROCESS_SECTION.DELIVER.IMAGE}
          imageAlt="Deliver illustration"
        >
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Our Principles
              </h3>
              <BulletList items={PROCESS_SECTION.DELIVER.PRINCIPLES} />
            </div>
            <p className="text-xl text-gray-600 text-justify">
              {PROCESS_SECTION.DELIVER.DESCRIPTION}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Explore;