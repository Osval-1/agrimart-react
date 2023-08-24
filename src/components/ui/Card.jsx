import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="w-56 h-72 ">
      <h1 className="flex justify-center font-semibold text-xl mb-8">{title}</h1>
      <p className="tracking-wider">{children}</p>
    </div>
  );
};

export default Card;
