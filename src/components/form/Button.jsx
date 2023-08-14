import React from "react";

const Button = ({ children, bgColor, width,...attributes }) => {
  return (
    <div>
      <button
        type="button"
        className={`${bgColor} ${width} py-2 rounded-xl font-bold cursor-pointer`}
        {...attributes}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
