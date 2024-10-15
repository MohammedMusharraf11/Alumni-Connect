// components/Card.jsx
import React from "react";

function Card({ title, description, icon, onClick }) {
  return (
    <div
      onClick={onClick} // Make sure the div can respond to click events
      className="cursor-pointer bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-lg hover:bg-color-[#E2EEFF] transition duration-300 ease-in-out font-outfit"
    >
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
      <p className="text-[#707EAE] text-center">{description}</p>
    </div>
  );
}

export default Card;
