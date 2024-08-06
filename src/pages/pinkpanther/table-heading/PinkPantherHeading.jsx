import React, { useEffect, useRef, useState } from "react";

const PinkPantherHeading = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("W");
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  return (
    <tbody>


     
<tr className="border-b border-gray-600 h-20">
          
          
          <th >
            <b># &nbsp;</b>
          </th>

          <th>
            <p className=" rounded-2xl">Stocks</p>
          </th>
          <th>
            <p className=" rounded-2xl">Price</p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              1m
            </p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              5m
            </p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              15m
            </p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              1h
            </p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              4h
            </p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              D
            </p>
          </th>
          <th>
            <p className=" cursor-pointer hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  p-2 rounded-2xl">
              {selectedOption}
            </p>
          </th>
          <th>
            <div className="relative" ref={dropdownRef}>
              <p
                onClick={toggleDropdown}
                className=" cursor-pointer  p-2 transform transition-transform duration-300 hover:translate-y-1 hover:bg-gray-600 hover:backdrop-blur-sm hover:bg-opacity-50  rounded-2xl "
              >
                &#9660;
                {isOpen && (
                  <div className="absolute custom-scroll h-[80vh] overflow-scroll top-full left-0 mt-2 w-48 bg-white cursor-default text-black border border-gray-300 rounded-lg shadow-lg">
                    <ul className="py-1">
                      <li
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 text-start font-thin  "
                      >
                        Seconds
                      </li>
                      <li
                        className="px-4 py-2  hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("1s")}
                      >
                        1 second
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("5s")}
                      >
                        5 second
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("10s")}
                      >
                        10 second
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("15s")}
                      >
                        15 second
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("30s")}
                      >
                        30 second
                      </li>

                      <li
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 text-start font-thin  "
                      >
                        Minutes
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("2m")}
                      >
                        2 minute
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("3m")}
                      >
                        3 minute
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("10m")}
                      >
                        10 minute
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("30m")}
                      >
                        30 minute
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("45m")}
                      >
                        45 minute
                      </li>

                      <li
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 text-start font-thin  "
                      >
                        Hours
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("2h")}
                      >
                        2 hours
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("3h")}
                      >
                        3 hours
                      </li>

                      <li
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 text-start font-thin  "
                      >
                        Days
                      </li>

                      

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("W")}
                      >
                        1 week
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("M")}
                      >
                        1 month
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("3M")}
                      >
                        3 month
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("6M")}
                      >
                        6 month
                      </li>

                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleOptionClick("12M")}
                      >
                        12 month
                      </li>
                    </ul>
                  </div>
                )}
              </p>
            </div>
          </th>
        </tr>


        


     

     



    </tbody>
  )
}

export default PinkPantherHeading
