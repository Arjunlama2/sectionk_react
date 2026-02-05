import React from "react";
import { useNavigate } from "react-router";

function Card({ data }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${data._id}`)}
      className="
        w-full 
        sm:w-[240px] 
        md:w-[260px] 
        lg:w-[270px]
        bg-white 
        rounded-xl 
        shadow-md 
        hover:shadow-xl 
        transition 
        cursor-pointer
        overflow-hidden
      "
    >
      {/* Image */}
      <div className="bg-[#F6F7FB] p-6 flex items-center justify-center">
        <img
          src={data.image}
          alt={data.title}
          className="h-40 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-2 py-4 px-3 text-center">
        <p className="font-semibold text-[#FB2E86] text-sm sm:text-base">
          {data.title}
        </p>

        <p className="text-xs text-gray-500">
          {data.code}
        </p>

        <p className="font-bold text-gray-800 text-base">
          ${data.price}
        </p>
      </div>
    </div>
  );
}

export default Card;
