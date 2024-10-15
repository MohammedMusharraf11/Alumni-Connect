import React from "react";

const FeatureCard = ({ title, description, onClick, isSelected , icon }) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md cursor-pointer transition-all duration-3000 font-outfit ${
        isSelected ? "bg-[#E2EEFF] border-2 border-blue-500" : "bg-white"
      }`}
      onClick={onClick}
    >
    <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
      <p className="text-[#707EAE]">{description}</p>
    </div>
  );
};

export default FeatureCard;
