import React from "react";

const Card = ({ title, description, icon }) => {
  return (
      <div className="bg-white p-4 rounded-lg shadow-md w-full font-outfit hover:bg-[#E2EEFF]">
      <div className="flex items-center space-x-3">
        <img src={icon}  />
        <div className="flex-shrink-0">
        </div>
        <div>
          <h2 className="font-bold text-lg text-secondary">{title}</h2>
          <p className="text-[#707EAE]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
