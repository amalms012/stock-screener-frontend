import React, { useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import "./SwingTrade.css";

function SwingTrade() {
  const handleCopy = (id) => {
    const textToCopy = document.getElementById(id).innerText;
    navigator.clipboard.writeText(textToCopy).then(
      () => {
        alert("Text copied to clipboard!");
      },
      (err) => {
        alert("Failed to copy text: " + err);
      }
    );
  };

  const [activeTab, setActiveTab] = useState("trades");
  return (
    <>
      {/* <NavBar /> */}

      <div className="bg-purple-50">
        <div className="py-4 px-8 text-lg">
          <div className=" flex space-x-5 justify-start ">
            <h2
              onClick={() => setActiveTab("trades")}
              className={`cursor-pointer  ${
                activeTab === "trades"
                  ? "border-b-2  border-black font-outfit font-bold text-black"
                  : "text-gray-700 font-outfit"
              }`}
            >
              Trades
            </h2>

            <h2
              onClick={() => setActiveTab("about")}
              className={`cursor-pointer ${
                activeTab === "about"
                  ? "border-b-2 border-black font-outfit font-bold text-black"
                  : "text-gray-700 font-outfit"
              }`}
            >
              About
            </h2>
          </div>

          <div className="mt-4 ">
            {activeTab === "trades" && (
              <div className="  pt-10">
                <h2 className="text-black font-roboto font-bold text-3xl sm:text-4xl  relative mb-10 w-5/6 sm:w-2/3 custom-underline">
                   Swing Trading Strategies of the Day.
                </h2>

                <div className="mx-6 grid grid-cols-1 gap-10 lg:grid-cols-2 2xl:grid-cols-3">

                  <div className="">
                    <div className="bg-white w-full  border overflow-hidden rounded-t-xl p-6 shadow-lg">
                      <div className="text-gray-400 uppercase text-xl mb-2">
                        <h1 className="text-lg font-oswald">sbicard</h1>
                      </div>
                      <div className="text-black font-outfit uppercase font-bold text-2xl mb-4">
                        <h2>sbicard</h2>
                      </div>
                      <div className="flex space-x-2 mb-4">
                        <button className="bg-green-500  uppercase   text-white font-k2d px-4 py-2  rounded-3xl">
                          ACTIVE
                        </button>
                        <button className="bg-blue-500   text-white font-k2d px-4  py-2 rounded-3xl  ">
                          Expires in 25 Days
                        </button>
                      </div>
                      <div className="flex  text-black items-center mb-4">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="text- mr-2"
                        />
                        <p className="text-md font-k2d font-bold text-black mr-4">
                          30/07/2024
                        </p>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-black mr-2"
                        />
                        <p className="text-md font-bold font-k2d text-black">
                          10:27 am
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row rounded-lg border border-gray-300">
                        <div className="flex-1 text-black p-4 border-b sm:border-r sm:border-b-0">
                          <h3 className="text-md whitespace-nowrap text-gray-400 font-bold  sm:text-lg uppercase mb-1">
                            Entry Price
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="entryPriceValue"
                              className=" text-lg font-bold"
                            >
                              {" "}
                              1.67
                            </p>
                            <button
                              onClick={() => handleCopy("entryPriceValue")}
                              className=" bg-[#1d3557] px-2 text-white  font-oswald rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 p-4 text-black border-b sm:border-r sm:border-b-0 ">
                          <h3 className="text-md sm:text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Stop Loss
                          </h3>
                          <div className="flex space-x-2">
                            <p id="stopLossValue" className="text-lg font-bold">
                              1.42
                            </p>
                            <button
                              onClick={() => handleCopy("stopLossValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>

                        <div className="flex-1    text-black  p-4">
                          <h3 className="text-md sm:text-text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Target
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="targetPriceValue"
                              className="text-lg font-bold"
                            >
                              1.89
                            </p>
                            <button
                              onClick={() => handleCopy("targetPriceValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="">
                    <div className="bg-white w-full  border overflow-hidden rounded-t-xl p-6 shadow-lg">
                      <div className="text-gray-400 uppercase text-xl mb-2">
                        <h1 className="text-lg font-oswald">sbicard</h1>
                      </div>
                      <div className="text-black font-outfit uppercase font-bold text-2xl mb-4">
                        <h2>sbicard</h2>
                      </div>
                      <div className="flex space-x-2 mb-4">
                        <button className="bg-green-500  uppercase   text-white font-k2d px-4 py-2  rounded-3xl">
                          ACTIVE
                        </button>
                        <button className="bg-blue-500   text-white font-k2d px-4  py-2 rounded-3xl  ">
                          Expires in 25 Days
                        </button>
                      </div>
                      <div className="flex  text-black items-center mb-4">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="text- mr-2"
                        />
                        <p className="text-md font-k2d font-bold text-black mr-4">
                          30/07/2024
                        </p>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-black mr-2"
                        />
                        <p className="text-md font-bold font-k2d text-black">
                          10:27 am
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row rounded-lg border border-gray-300">
                        <div className="flex-1 text-black p-4 border-b sm:border-r sm:border-b-0">
                          <h3 className="text-md whitespace-nowrap text-gray-400 font-bold  sm:text-lg uppercase mb-1">
                            Entry Price
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="entryPriceValue"
                              className=" text-lg font-bold"
                            >
                              {" "}
                              1.67
                            </p>
                            <button
                              onClick={() => handleCopy("entryPriceValue")}
                              className=" bg-[#1d3557] px-2 text-white  font-oswald rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 p-4 text-black border-b sm:border-r sm:border-b-0 ">
                          <h3 className="text-md sm:text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Stop Loss
                          </h3>
                          <div className="flex space-x-2">
                            <p id="stopLossValue" className="text-lg font-bold">
                              1.42
                            </p>
                            <button
                              onClick={() => handleCopy("stopLossValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>

                        <div className="flex-1    text-black  p-4">
                          <h3 className="text-md sm:text-text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Target
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="targetPriceValue"
                              className="text-lg font-bold"
                            >
                              1.89
                            </p>
                            <button
                              onClick={() => handleCopy("targetPriceValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="">
                    <div className="bg-white w-full  border overflow-hidden rounded-t-xl p-6 shadow-lg">
                      <div className="text-gray-400 uppercase text-xl mb-2">
                        <h1 className="text-lg font-oswald">sbicard</h1>
                      </div>
                      <div className="text-black font-outfit uppercase font-bold text-2xl mb-4">
                        <h2>sbicard</h2>
                      </div>
                      <div className="flex space-x-2 mb-4">
                        <button className="bg-green-500  uppercase   text-white font-k2d px-4 py-2  rounded-3xl">
                          ACTIVE
                        </button>
                        <button className="bg-blue-500   text-white font-k2d px-4  py-2 rounded-3xl  ">
                          Expires in 25 Days
                        </button>
                      </div>
                      <div className="flex  text-black items-center mb-4">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="text- mr-2"
                        />
                        <p className="text-md font-k2d font-bold text-black mr-4">
                          30/07/2024
                        </p>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-black mr-2"
                        />
                        <p className="text-md font-bold font-k2d text-black">
                          10:27 am
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row rounded-lg border border-gray-300">
                        <div className="flex-1 text-black p-4 border-b sm:border-r sm:border-b-0">
                          <h3 className="text-md whitespace-nowrap text-gray-400 font-bold  sm:text-lg uppercase mb-1">
                            Entry Price
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="entryPriceValue"
                              className=" text-lg font-bold"
                            >
                              {" "}
                              1.67
                            </p>
                            <button
                              onClick={() => handleCopy("entryPriceValue")}
                              className=" bg-[#1d3557] px-2 text-white  font-oswald rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 p-4 text-black border-b sm:border-r sm:border-b-0 ">
                          <h3 className="text-md sm:text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Stop Loss
                          </h3>
                          <div className="flex space-x-2">
                            <p id="stopLossValue" className="text-lg font-bold">
                              1.42
                            </p>
                            <button
                              onClick={() => handleCopy("stopLossValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>

                        <div className="flex-1    text-black  p-4">
                          <h3 className="text-md sm:text-text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Target
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="targetPriceValue"
                              className="text-lg font-bold"
                            >
                              1.89
                            </p>
                            <button
                              onClick={() => handleCopy("targetPriceValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="">
                    <div className="bg-white w-full  border overflow-hidden rounded-t-xl p-6 shadow-lg">
                      <div className="text-gray-400 uppercase text-xl mb-2">
                        <h1 className="text-lg font-oswald">sbicard</h1>
                      </div>
                      <div className="text-black font-outfit uppercase font-bold text-2xl mb-4">
                        <h2>sbicard</h2>
                      </div>
                      <div className="flex space-x-2 mb-4">
                        <button className="bg-green-500  uppercase   text-white font-k2d px-4 py-2  rounded-3xl">
                          ACTIVE
                        </button>
                        <button className="bg-blue-500   text-white font-k2d px-4  py-2 rounded-3xl  ">
                          Expires in 25 Days
                        </button>
                      </div>
                      <div className="flex  text-black items-center mb-4">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          className="text- mr-2"
                        />
                        <p className="text-md font-k2d font-bold text-black mr-4">
                          30/07/2024
                        </p>
                        <FontAwesomeIcon
                          icon={faClock}
                          className="text-black mr-2"
                        />
                        <p className="text-md font-bold font-k2d text-black">
                          10:27 am
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row rounded-lg border border-gray-300">
                        <div className="flex-1 text-black p-4 border-b sm:border-r sm:border-b-0">
                          <h3 className="text-md whitespace-nowrap text-gray-400 font-bold  sm:text-lg uppercase mb-1">
                            Entry Price
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="entryPriceValue"
                              className=" text-lg font-bold"
                            >
                              {" "}
                              1.67
                            </p>
                            <button
                              onClick={() => handleCopy("entryPriceValue")}
                              className=" bg-[#1d3557] px-2 text-white  font-oswald rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 p-4 text-black border-b sm:border-r sm:border-b-0 ">
                          <h3 className="text-md sm:text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Stop Loss
                          </h3>
                          <div className="flex space-x-2">
                            <p id="stopLossValue" className="text-lg font-bold">
                              1.42
                            </p>
                            <button
                              onClick={() => handleCopy("stopLossValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>

                        <div className="flex-1    text-black  p-4">
                          <h3 className="text-md sm:text-text-lg whitespace-nowrap text-gray-400 font-bold uppercase mb-1">
                            Target
                          </h3>
                          <div className="flex space-x-2">
                            <p
                              id="targetPriceValue"
                              className="text-lg font-bold"
                            >
                              1.89
                            </p>
                            <button
                              onClick={() => handleCopy("targetPriceValue")}
                              className=" bg-[#1d3557] px-2 font-oswald text-white rounded-[10px] hover:bg-blue-600"
                            >
                              copy
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  



                </div>
              </div>
            )}

            {activeTab === "about" && (
              <div className="p-10">
                <h3 className="text-xl text-black font-semibold">About Us</h3>
                <p className="mt-2 text-black"> about us.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SwingTrade;
