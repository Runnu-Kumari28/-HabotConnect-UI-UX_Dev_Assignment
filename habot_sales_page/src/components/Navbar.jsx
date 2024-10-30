import React, { useState } from 'react';
import habotLogo from '../Resources/habot-logo.jpg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleDropdownOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setIsDropdownOpen(false); 
  };

  return (
    <div className="flex items-center justify-between bg-white px-8 py-2">
      
      <img src={habotLogo} alt="Habot Logo" className="h-40" />

      
      <div className="flex items-center space-x-8 text-lg">
        <ul className="flex space-x-8 text-gray-600">
          <li>
            <a href="#" className="hover:text-gray-800">
              Find Suppliers
            </a>
          </li>

          
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="flex items-center space-x-2 hover:text-gray-800"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              <span>Find Service Tags</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth="2"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M19 9l-7 7-7-7" 
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-full mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg font-bold z-50">
                {["Option 1", "Option 2", "Option 3"].map((option) => (
                  <li 
                    key={option} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleDropdownOptionClick(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        
        <button className="border border-green-800 text-green-800 px-6 py-2 text-lg font-bold rounded">
          Login/Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
