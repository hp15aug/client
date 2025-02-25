import React from "react";
import { useNavigate } from "react-router-dom";

const RightCard = ({ title, content, img, url, btn }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-black text-white py-10 sm:py-16 md:py-20 lg:py-40">
      <div className="mx-4 sm:mx-8 md:mx-20 lg:mx-56 flex flex-col items-center justify-center text-justify px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:hidden text-center">{title}</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full gap-6 md:gap-0">
          {/* Content Section */}
          <div className="ml-20 w-full md:w-3/5 p-2 sm:p-4 md:p-0 text-center md:text-left autoShow order-2 md:order-1">
            {/* Title (Shown on larger screens) */}
            <h2 className="hidden md:block mt-4 text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              {title}
            </h2>

            {/* Content Text */}
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-justify">
              {content}
            </p>

            <button
              className="font-sans px-6 sm:px-8 py-3 sm:py-4 border border-white my-btn flex justify-center gap-2 items-center shadow-xl text-base sm:text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 rounded-full group mx-auto md:mx-0"
              type="button"
              onClick={() => navigate(url)}
            >
              {btn}
            </button>
          </div>

          <div className="w-full md:w-2/5 order-1 md:order-2 ml-0 sm:ml-4 md:ml-20 lg:ml-40 mb-6 md:mb-0">
            <img
              src={img}
              alt="Creative Work"
              className="w-full max-w-[855px] h-[250px] sm:h-[300px] md:h-[370px] object-cover autoShow rounded-2xl sm:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightCard;