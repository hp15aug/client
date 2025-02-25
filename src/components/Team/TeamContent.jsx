import React from 'react';

function TeamContent() {
  return (
    <div className="bg-white text-black p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Scientific + Creative Team Section */}
        <section className="flex flex-col md:grid md:grid-cols-2 gap-6 sm:pt-20">
          {/* Title - Appears first on mobile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-light mb-4">
              Scientific + <br />
              Creative team
            </h1>
          </div>

          {/* Paragraph - Appears below the title on mobile */}
          <div>
            <p className="text-gray-700 leading-relaxed text-lg text-justify">
              Our team consists of highly skilled 3D artists, designers, animators, illustrators, and developers with a wealth of experience across various clinical sectors. Leveraging our strong background in medical science and factual broadcast production, we create high-quality, scientifically accurate visuals that meet the highest standards. With a focus on creativity and precision, we provide innovative solutions that excel in both design and medical content.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TeamContent;
