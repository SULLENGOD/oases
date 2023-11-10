/* eslint-disable react/prop-types */
import { useState } from "react";

const Dropdown = ({ list, onSelect, dropdownName }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        type="button"
      >
        {dropdownName}
        <svg
          className={`w-2.5 h-2.5 ms-3 transition-transform ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div className="absolute z-10 bg-purple-900 divide-y divide-gray-100 rounded-lg shadow w-44 mt-2">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {list &&
              list.map((element, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-purple-500 dark:hover:text-white"
                    onClick={() => {
                      onSelect(element);
                      toggleDropdown();
                    }}
                  >
                    {element.name}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
