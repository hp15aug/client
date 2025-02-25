import { Link } from "react-router-dom"

export default function AboutContent() {
  const scrollToTestimonials = () => {
    const section = document.getElementById("testimonial");
    if (section) {
      const offset = 170;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: sectionPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 lg:pt-24 pb-8 sm:pb-16 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto space-y-8 sm:space-y-16 lg:space-y-24">
        {/* What we do section */}
        <section className="relative autoShow mt-4 sm:mt-8 lg:mt-20">
          <div className="flex flex-col sm:block">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal mb-4 sm:mb-6 lg:mb-8 autoShow">
              What we do
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed max-w-4xl mb-6 sm:mb-8 lg:mb-12 autoShow">
              We make outstanding + effective visual communication digital design, from high-end medical animation,
              illustration to interactive content — engaging and elevating medical science, platform technology and brand.
            </p>

            {/* Navigation links */}
            <div className="flex flex-wrap gap-2 sm:gap-x-4 text-sm sm:text-base lg:text-lg text-gray-500 mb-4 sm:mb-6">
              <Link
                to="/showreel"
                className="hover:text-black transition-colors duration-300 px-2 sm:px-3 py-1 rounded-full"
              >
                Showreel
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link
                to="/services"
                className="hover:text-black transition-colors duration-300 px-2 sm:px-3 py-1 rounded-full"
              >
                Services
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTestimonials();
                }}
                className="hover:text-black transition-colors duration-300 px-2 sm:px-3 py-1 rounded-full"
              >
                Testimonials
              </Link>
              <span className="hidden sm:inline">•</span>
              <Link
                to="/team"
                className="hover:text-black transition-colors duration-300 px-2 sm:px-3 py-1 rounded-full"
              >
                Team
              </Link>
            </div>

            {/* See the work button */}
            <Link
              to="/work"
              className="relative mb-8 sm:mb-0 sm:absolute sm:top-0 sm:right-0 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full hover:bg-[#3ab3e1] transition-colors duration-300 hover:bg-black/90 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3ab3e1] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 overflow-hidden"
            >
              See the work
            </Link>
          </div>
        </section>

        {/* Who we work with section */}
        <section className="relative autoShow mt-8 sm:mt-12 lg:mt-16">
          <div className="flex flex-col sm:block">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-normal mb-4 sm:mb-6 lg:mb-8">
              Who we work with
            </h2>
            <p className="text-base sm:text-lg lg:text-2xl leading-relaxed max-w-4xl mb-6 sm:mb-8 lg:mb-12">
              We collaborate with clients from the pharmaceutical, biotechnology, medical device, science & technology
              sectors, as well as factual broadcast, research institutes, and healthcare communications agencies
              worldwide.
            </p>

            {/* Testimonials button */}
            <Link
              onClick={(e) => {
                e.preventDefault();
                scrollToTestimonials();
              }}
              className="relative mb-8 sm:mb-0 sm:absolute sm:top-0 sm:right-0 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full hover:bg-[#3ab3e1] transition-colors duration-300 hover:bg-black/90 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#3ab3e1] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 z-10 overflow-hidden"
            >
              Testimonials
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}