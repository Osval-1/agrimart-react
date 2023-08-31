import React, { useState } from "react";

const SideBar = ({ toogleHandler, toogle }) => {
  return (
    <section
      className={`fixed bg-black/10 h-screen md:hidden  transition-all duration-1000 right-0  z-10 ${
        toogle ? "w-screen translate-x-0" : "translate-x-full w-0"
      }`}
      onClick={toogleHandler}
    >
      <div className="flex justify-between ml-9">
        <button
          className="text-black text-2xl font-extrabold"
          onClick={toogleHandler}
        >
          x
        </button>
        <div className="bg-white fixed h-screen right-0 z-50 w-2/3 shadow-lg overflow-x-hidden overflow-y-auto ">
          Sidebar
        </div>
      </div>
    </section>
  );
};

export default SideBar;
