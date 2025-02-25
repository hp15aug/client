const ProcessContent = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section key={section.title} className="mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-start mt-4">
              
              <div className="space-y-12 mr-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-gray-900 autoShow">
                  {section.title}
                </h2>
                <h3 className="text-xl text-gray-600 text-justify autoShow">
                  {section.description}
                </h3>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-black autoShow ml-12">
                <video
                  src={section.videoSrc || "/placeholder-video.mp4"}
                  alt={section.videoAlt || "Process Video"}
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ProcessContent;