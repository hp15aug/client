import { MOUTH_CARE_SECTIONS } from "../../constants";

const MouthCareContent = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto my-40">
        {MOUTH_CARE_SECTIONS.map((section, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row lg:space-x-[200px] items-start ${
              index !== MOUTH_CARE_SECTIONS.length - 1 ? 'mb-44' : ''
            }`}
          >
            {/* Left Content Section */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h1>
              
              <h2 className="text-2xl text-gray-600 mb-8 autoShow">
                {section.subheading}
              </h2>

              {/* Advantages Section */}
              <div className="mb-8 autoShow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Advantages</h3>
                <ul className="space-y-3">
                  {section.advantages.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 text-xl mr-2">•</span>
                      <span className="text-gray-600 text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disadvantages Section */}
              <div className="autoShow">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Disadvantages</h3>
                <ul className="space-y-3">
                  {section.disadvantages.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2 text-xl">•</span>
                      <span className="text-gray-600 text-xl">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Video Section */}
            <div className="w-full lg:w-1/2 autoShow">
              <div className="relative mt-6 w-full h-[300px] rounded-xl overflow-hidden shadow-xl bg-black">
                <video
                  src={section.video} // Note: Change 'image' to 'video' in your MOUTH_CARE_SECTIONS data
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  muted
                  poster={section.poster} // Optional: Add a poster image while video loads
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MouthCareContent;