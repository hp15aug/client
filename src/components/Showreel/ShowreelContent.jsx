import React from "react";
import { useNavigate } from "react-router-dom";

const BulletPoint = ({ text }) => {
    return (
        <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0"></span>
            <span className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">{text}</span>
        </div>
    );
};

const ShowreelContent = () => {
    const navigate = useNavigate();
    return (
        <section>
            {/* Section-I */}
            <div className="bg-black text-white min-h-screen flex items-center px-4 sm:px-8 md:px-16 lg:mx-40">
                <div className="w-full lg:w-[75%] text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2 w-full autoShow">
                        Our Best Medical Animations & Scientific Video Productions
                    </h1>
                    <p className="text-gray-400 mt-6 sm:mt-8 lg:mt-12 text-base sm:text-lg lg:text-xl leading-relaxed autoShow">
                        Explore a selection of our finest medical animations and scientific video productions, crafted to communicate complex concepts with clarity, accuracy, and visual impact. From detailed molecular interactions to cutting-edge surgical procedures, our work blends scientific precision with compelling storytelling.
                    </p>
                    <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed autoShow">
                        Discover how our expertise brings science to life through stunning visuals and immersive storytelling.
                    </p>
                    <div className="mt-14">
                        <button onClick={() => navigate("/contact")} className="px-8 py-4 border border-white rounded-full transition-colors duration-300 my-btn autoShow">
                            Start a project
                        </button>
                    </div>
                </div>
            </div>

            {/* Section II */}
            <div className="max-w-screen mx-auto p-4 sm:p-6 lg:p-8 py-10 sm:py-16 lg:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center bg-white">
                <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:px-16">
                    <img
                        src="./assets/thumbnail/scontent.jpg"
                        alt="Colorful molecular structure visualization"
                        className="w-full h-auto"
                    />
                </div>

                <div className="w-full lg:w-1/2 px-4 sm:px-8 lg:pl-12 space-y-4 sm:space-y-6">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-gray-900">
                        Uses of Medical Animation Videos
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700">
                        Our high quality design and bespoke visual strategies are adapted into multi-channel communication platforms
                        and healthcare campaigns.
                    </p>

                    <div className="w-full mt-6 sm:mt-8 lg:mt-10 text-left grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-4 sm:gap-y-6 text-gray-400">
                        <div className="space-y-2">
                            <BulletPoint text="​Medical & Pharmaceutical Animations" />
                            <BulletPoint text="Patient & Public Health Education" />
                            <BulletPoint text="Scientific & Research Visualizations" />
                            <BulletPoint text="Surgical & Procedural Animations" />
                            <BulletPoint text="Medical Meetings" />
                        </div>

                        <div className="space-y-2">
                            <BulletPoint text="e-Learning module" />
                            <BulletPoint text="Brand / Product Launch" />
                            <BulletPoint text="Interactive Apps" />
                            <BulletPoint text="Virtual events" />
                            <BulletPoint text="Sales Demos" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section-III */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mr-0 lg:mr-8 text-gray-900">
                            Extensive Scientific Expertise Across Multiple Therapeutic Areas
                        </h2>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 pl-0 lg:pl-10 text-justify autoShow mt-4 lg:mt-0">
                            Includes: Oncology, Autoimmune diseases, Breast cancer, Cardiovascular, CNS disorders, Congenital Diseases,
                            COPD, Dermatology, Diabetes, Dry eye syndrome, Gastroenterology, Genetics, Atherosclerosis, Huntington's
                            disease, Hyperinsulinism, Infectious diseases, Immunology, Immuno-oncology, Rare Diseases, Inflammatory
                            conditions, Lung cancer, Metabolic Diseases, Multiple sclerosis, Neurology, Ophthalmology, Respiratory
                            diseases, Viral infections, Debilitating Genetic Diseases, Hematologic disorders and Neurodegenerative
                            diseases.
                        </p>
                    </div>
                </div>
            </div>

            {/* Section-IV */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-tight tracking-tight mr-0 lg:mr-8 text-gray-900">
                            How 3D Medical Animation Benefits the Healthcare Industry
                        </h2>
                    </div>
                    <div>
                        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-700 pl-0 lg:pl-10 text-justify autoShow mt-4 lg:mt-0">
                            The healthcare industry is undergoing a rapid digital transformation, and 3D medical animation has emerged as a powerful tool for simplifying complex medical concepts, enhancing education, improving patient engagement, and supporting research and innovation.

                            From pharmaceutical marketing and surgical training to patient education and biotech research, 3D medical animation bridges the gap between complex science and clear communication, making it indispensable across multiple sectors of healthcare.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ShowreelContent;