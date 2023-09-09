import React, {useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ toogleHandler, toogle }) => {
  const outsideClick = (event) => {
    if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
      toogleHandler();
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", outsideClick);
    return () => window.removeEventListener("mousedown", outsideClick);
  });
  const sideBarRef = useRef(null);
  return (
    <section
      className={`fixed bg-black/10 h-screen md:hidden  transition-all duration-1000 right-0  z-10 ${
        toogle ? "w-screen translate-x-0" : "translate-x-full w-0"
      }`}
      
    >
      <div className="bg-white absolute h-screen right-0 z-50 w-2/3 shadow-lg overflow-x-hidden overflow-y-auto " ref={sideBarRef}>
        <button
          className="text-black text-2xl font-extrabold ml-4"
          onClick={toogleHandler}
        >
          x
        </button>
        sidebar
        <Link to="/"></Link>
      </div>
    </section>
  );
};

export default SideBar;
