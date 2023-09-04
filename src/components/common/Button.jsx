import React from "react";

const Button = ({ children, bgColor, width}) => {
  return (
    <div>
      <button
        type="button"
        className={`${bgColor} ${width} py-2 rounded-xl font-bold cursor-pointer`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
