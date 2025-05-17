import React from "react";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <div className="bg-header-blue header-tcolor">
      <div className="flex justify-between px-20 items-center">
        <h1 className="font-bold text-4xl">H</h1>
        <div className="py-5 ">
          <ul className="">
            <NavLink
              to="/url"
              className={`mx-2 rounded-xl px-10 border-1 py-2 hover:bg-blue-900 hover:text-white duration-150 ${
                isActive("/url") ? "bg-blue-900 font-bold" : "text-white"
              }`}
            >
              URL
            </NavLink>
            <NavLink
              to="/WtoPDF"
              className={`"x-2 rounded-xl px-10 border-1 py-2 hover:bg-blue-900 hover:text-white duration-150 ${
                isActive("/WtoPDF") ? "bg-blue-900 font-bold" : "text-white"
              }`}
            >
              Word to PDF
            </NavLink>
            <NavLink
              to="/PDFtoW"
              className={`"x-2 rounded-xl px-10 border-1 py-2 hover:bg-blue-900 hover:text-white duration-150 ${
                isActive("/PDFtoW") ? "bg-blue-900 font-bold" : "text-white"
              }`}
            >
              PDF to Word
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
