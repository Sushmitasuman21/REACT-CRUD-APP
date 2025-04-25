import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const [themeMode, setthemeMode] = useState(false);

  const theme = () => {
    let root = document.documentElement;
    root.classList.toggle("dark");
    setthemeMode(!themeMode);
  };
  return (
    <nav className="shadow-lg w-14 h-[90vh] p-3 z-40 ">
      <div className=" p-1 text-xl flex justify-center cursor-pointer">
        <FaHome />
      </div>
      <div className="p-1 text-xl flex justify-center my-2.5 cursor-pointer">
        <FaRegUser />
      </div>
      <div className=" p-1 text-xl flex justify-center cursor-pointer">
        <AiOutlineUserAdd />
      </div>
      <div
        onClick={theme}
        className=" p-1 text-xl flex justify-center cursor-pointer mt-3"
      >
        {themeMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </div>
    </nav>
  );
};

export default Navbar;
