import React from "react";

const Modal = ({ children }) => {
  return (
    <div className=" bg-black/30 h-screen flex justify-center items-center fixed  overflow-y-auto  z-50 inset-0 ">
      <div className="flex flex-col gap-4 w-2/3 md:w-1/2   rounded-lg shadow-lg bg-white p-6">
        <div className="text-xl border-b-2 pb-6 text-center font-semibold">
          Login
        <button className="float-right p-3 bg-green rounded-full relative -top-6 -right-5">x</button>
        </div>
        <input
          type="text"
          placeholder="Name"
          className="bg-grey/20 rounded-lg px-4 py-2 outline-none"
        />
        <input
          type="text"
          placeholder="Password"
          className="bg-grey/20 rounded-lg px-4 py-2 outline-none"
        />
        <button className="text-white bg-green w-32 m-auto py-1 rounded-lg shadow-lg border-0">Submit</button>
      </div>
    </div>
  );
};

export default Modal;
