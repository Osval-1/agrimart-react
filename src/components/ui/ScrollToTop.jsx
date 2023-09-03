import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTop = () => {
  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div onClick={ScrollTop}>
      <button>
        <BsFillArrowUpCircleFill />
      </button>
    </div>
  );
};

export default ScrollToTop;
