import React from "react";

const Button = ({ text, bgColor, width }) => {
  return (
    <div>
      <button
        type="submit"
        className={`${bgColor} ${width} py-2 rounded-xl font-bold cursor-pointer`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
