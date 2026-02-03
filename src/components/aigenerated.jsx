import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

function Header() {
  return (
    <header className="w-full">
      {/* TOP BAR */}
      <div className="bg-purple-600 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Left */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <FaEnvelope />
              nihason@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              (12345) 67890
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-5">
            <span className="cursor-pointer">English</span>
            <span className="cursor-pointer">USD</span>
            <span className="flex items-center gap-1 cursor-pointer">
              Login <FaUser />
            </span>
            <span className="flex items-center gap-1 cursor-pointer">
              Wishlist <FaHeart />
            </span>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-gray-800">Hekto</h1>

          {/* Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li className="text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Pages</li>
            <li className="hover:text-pink-500 cursor-pointer">Products</li>
            <li className="hover:text-pink-500 cursor-pointer">Blog</li>
            <li className="hover:text-pink-500 cursor-pointer">Shop</li>
            <li className="hover:text-pink-500 cursor-pointer">Contact</li>
          </ul>

          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none"
            />
            <button className="bg-pink-500 px-3 py-2 text-white">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
