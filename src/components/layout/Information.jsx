import React from 'react';

const Information = ({title, content}) => {
  return (
    <section className="bg-black text-white py-24 my-32 ">
      <div className="container mx-auto px-4">

        {/* Vision Title */}
        <h2 className="text-4xl font-bold mb-20">VISION</h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              At iL7 Studios, we specialize in medical animation, blending cutting-edge science with visual storytelling
              to craft compelling campaigns for healthcare and pharmaceutical industries.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            {/* Replace the src with your actual image path */}
            <img
              src="/path-to-your-medical-animation.jpg"
              alt="Medical Animation Visualization"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Information;
