
import React, { useState } from "react";
import log from "../../assets/women/log.png";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About Us",
    link: "/About",
  },

  {
    id: 3,
    name: "Login",
    link: "/Login",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
  

    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="flex justify-between items-center px-4 py-6">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
          
             Microloan
          </a>
        </div>

        {/* Right Section: Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          {Menu.map((data) => (
            <div
              key={data.id}
              className="relative"
              onMouseEnter={() => handleMouseEnter(data.id)}
              onMouseLeave={handleMouseLeave}
            >
              {data.submenu ? (
                <>
                  <button className="flex items-center px-4 py-2 hover:text-primary duration-200">
                    {data.name}
                 
                  </button>
                  {activeDropdown === data.id && (
                    <ul className="absolute left-0 top-full bg-white dark:bg-gray-800 shadow-md rounded-md py-2 min-w-[200px]">
                      {data.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 hover:text-primary duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  className="inline-block px-4 py-2 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden block text-gray-600 dark:text-gray-300 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden bg-white dark:bg-gray-900 py-2 z-50 fixed inset-0 mt-16 transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center space-y-4 pt-16">
          {Menu.map((data) => (
            <li key={data.id} className="w-full text-center relative">
              {data.submenu ? (
                <>
                  <button
                    className="block w-full px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === data.id ? null : data.id
                      )
                    }
                  >
                    {data.name}
                    <FaChevronDown className="ml-1 inline" />
                  </button>
                  {activeDropdown === data.id && (
                    <ul className="bg-gray-100 dark:bg-gray-800 py-2">
                      {data.submenu.map((subItem) => (
                        <li key={subItem.id}>
                          <Link
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  to={data.link}
                  className="block w-full px-4 py-3 text-lg text-gray-600 dark:text-gray-300 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;