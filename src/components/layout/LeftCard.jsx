import React from "react";
import { useNavigate } from "react-router-dom";

const LeftCard = ({ title, content, img, url, btn }) => {
  const navigate = useNavigate();
  return (
    <section className="bg-white text-black pl-4 sm:pl-8 md:pl-20 lg:pl-40 py-10 sm:py-16 md:py-20 lg:py-40">
      <div className="mx-4 sm:mx-8 md:mx-20 lg:mx-56 flex flex-col items-center justify-center text-justify px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 md:hidden text-center">{title}</h2>
        
        <div className="flex flex-col md:flex-row items-start justify-between w-full md:gap-[165px]">
          <div className="w-full md:w-2/5 flex justify-center md:justify-end mb-6 md:mb-0">
            <img
              src={img}
              alt="Creative Work"
              className="w-full lg:min-w-[555px] h-[250px] sm:h-[300px] md:h-[370px] object-cover autoShow rounded-3xl"
            />
          </div>
          
          <div className="w-full md:w-3/5 p-2 sm:p-4 md:p-0 text-center md:text-left autoShow">
            <h2 className="hidden md:block text-2xl sm:text-3xl font-bold mt-8 sm:mt-2 mb-3 sm:mb-4">{title}</h2>
            <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-justify">{content}</p>
            <button
              className="my-btn rounded-full px-6 sm:px-8 py-3 sm:py-4 text transition-colors font-sans justify-center gap-2 items-center shadow-xl text-base sm:text-lg"
              type="button"
              onClick={() => navigate(url)}
            >
              {btn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftCard;