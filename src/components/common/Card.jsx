import React from "react";

const Card = ({ children, title }) => {
  return (
    <div className="w-2/3 md:w-1/3 h-72 mb-24 ">
      <h1 className="flex justify-center font-semibold text-xl mb-12">{title}</h1>
      <p className="tracking-wider">{children}</p>
    </div>
  );
};

export default Card;
