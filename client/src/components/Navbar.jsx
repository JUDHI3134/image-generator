import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-4">
      <img src={assets.logo} className="w-28 sm:w-32 lg:w-40" alt="" />

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-emerald-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700">
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">Credit Left: 50</p>
            </button>
            <p className="text-gray-600 pl-4 max-sm:hidden">Hi, Judhistir</p>

            <div className="relative group">
              <img
                className="w-10 drop-shadow"
                src={assets.profile_icon}
                alt=""
              />
              <div className="hidden absolute group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  <li className="px-2 py-1 cursor-pointer pr-10">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p onClick={() => navigate("/buy")} className="cursor-pointer">
              Pricing
            </p>
            <button className="cursor-pointer bg-blue-600 text-white rounded-full px-7 py-2 sm:px-10 text-sm">
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;