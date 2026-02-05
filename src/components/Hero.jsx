import React from "react";

function Hero({ data }) {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:   -40">
      
      {/* Left Content */}
      <div className="flex flex-col gap-5 text-center md:text-left mt-20 md:mt-0 max-w-xl">
        <div>
          <span className="text-[#FB2E86] text-sm md:text-base">
            {data}.
          </span>

          <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mt-2">
            New Furniture Collection Trends in 2020
          </p>
        </div>

        <button className="bg-[#FB2E86] w-fit mx-auto md:mx-0 px-10 py-4 text-white rounded hover:opacity-90 transition">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="hidden md:block">
        <img
          src="/images/hero.png"
          alt="Hero"
          className="h-[280px] lg:h-[400px] aspect-square object-contain"
        />
      </div>

    </div>
  );
}

export default Hero;
