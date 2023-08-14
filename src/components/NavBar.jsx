import React from "react";
import Button from "./form/Button";
import { BiLeaf } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  return (
    <nav>
      <div className="flex flex-row bg-green px-1 py-2 justify-between items-center drop-shadow-xl ">
        <div className="w-1/3 flex items-center text-white">
          <BiLeaf className="text-3xl text-white " />
          <div>LOCAL-CONNECT</div>
        </div>
        <HiMenu className="text-3xl text-white cursor-pointer md:hidden" />
        <div className="w-2/3 hidden md:flex justify-evenly  text-white ">
          <li>
            <button href="#">HOME</button>
          </li>
          <li>
            <button href="#">SERVICES</button>
          </li>
          <li>
            <button href="#">ABOUT</button>
          </li>
          <li>
            <button href="#">MEMBERSHIP</button>
          </li>
          <li>
            <button href="#">HELP</button>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
