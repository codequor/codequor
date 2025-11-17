// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import im from "../assets/bgpics.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
      
<div className="flex items-center">
  <Link to="/" className="flex-shrink-0">
    <img 
      src={im} 
      alt="CodeQuor Logo" 
      className="h-10 w-auto" // ← Only this line changed
    />
  </Link>
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#1065c0] transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-[#1065c0] transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#1065c0] transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#1065c0] transition duration-300">
              Contact
            </Link>
            <Link
              to="/consult"
              className="bg-[#1065c0] text-[#fff] px-4 py-2 rounded-md hover:bg-[#0e55a0] transition duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#1065c0] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-[#1065c0] transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-[#1065c0] transition duration-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-[#1065c0] transition duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-[#1065c0] transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/consult"
              className="block px-3 py-2 bg-[#1065c0] text-white rounded-md hover:bg-[#0e55a0] transition duration-300"
              onClick={toggleMenu}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;