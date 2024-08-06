import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

function Strategies() {
  const handleScroll = () => {
    const section = document.getElementById("trading-signals");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <NavBar />

      <div className="min-h-screen bg-white text-black px-10 lg:px-28 p-6">
        <header className="mt-6 font-libre-baskerville mb-12 flex flex-col items-start lg:items-center">
          <h1 className="mt-20 text-4xl lg:text-6xl font-bold mb-4 text-start lg:text-center ">
            Explore Cutting-Edge Trading Strategies
          </h1>
          <p className="text-start text-sm lg:text-lg  lg:text-center w-5/6 lg:w-2/3">
            Welcome to Qartelz Signals Pro, where you can delve into a range of
            expertly crafted trading signals and strategies designed to elevate
            your trading game.
          </p>
          <button
            onClick={handleScroll}
            className="mt-10 bg-blue-500 text-white rounded-full py-2 px-4 flex items-center justify-center hover:bg-blue-600 "
          >
            <span className="mr-2">Explore Our Top Trading Signals</span>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
          <div className="bg-purple-50 shadow-md border p-6 rounded-lg ">
            <h2 className="text-xl font-urbanist font-bold mb-4">
              Intraday Signals
            </h2>
            <p className="font-libre-baskerville text-sm">
              Stay ahead with real-time intraday signals that help you
              capitalize on short-term market movements. Our signals provide the
              insights you need to make swift and informed decisions.
            </p>
          </div>

          <div className="bg-purple-50 shadow-md border p-6 rounded-lg ">
            <h2 className="text-xl font-urbanist font-bold mb-4">
              Swing Trading Strategies
            </h2>
            <p className="font-libre-baskerville text-sm">
              Optimize your trades with our swing trading strategies that
              identify opportunities for medium-term gains. Benefit from expert
              analysis that helps you catch the right market swings.
            </p>
          </div>

      
          <div className="bg-purple-50 shadow-md border p-6 rounded-lg ">
            <h2 className="text-xl font-urbanist font-bold mb-4">
              Support and Resistance Levels
            </h2>
            <p className="font-libre-baskerville text-sm">
              Our platform provides clear support and resistance levels, aiding
              in better decision-making and risk management. Understand the key
              levels that can impact your trades.
            </p>
          </div>
        </section>
      </div>

      <div className=" bg-purple-50">
        <div className=" text-center">
          <a
            id="trading-signals"
            className="mt-4  px-6 py-4  bg-[#6F00FF] font-urbanist font-bold text-lg  text-white rounded-lg"
          >
            Discover the Best Strategic Trades of the Day
          </a>
        </div>

        <div className="grid mx-10 grid-cols-1   lg:grid-cols-2 xl:grid-cols-3 gap-2 lg:gap-x-10 px-4 lg:px-8">

          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <Link to="/pinkpanther">
                <div className="bg-white transition-transform duration-300 transform hover:scale-110 shadow-lg mt-20 border rounded-3xl w-full overflow-hidden flex flex-col justify-between">
                  <div className="px-6 pt-6">
                    <div className="relative mb-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-outfit font-bold text-blue-900">
                          5 trades available.
                        </h2>
                        <FontAwesomeIcon
                          className="text-gray-500 text-2xl"
                          icon={faChevronRight}
                        />
                      </div>
                      <div className=" w-full border-b-2 mt-2 border-gray-300"></div>
                    </div>
                    <h1 className="text-4xl font-outfit font-extrabold text-gray-900 mb-6">
                      Pink Panther
                    </h1>

                    <div className="flex font-libre-baskerville   gap-2 whitespace-nowrap mb-6">
                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Swing
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Medium Volatility
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#343a40] flex  font-outfit  justify-between py-2 px-4 ">
                    <div className="text-center mb-4">
                      <h3 className="text-md font-extralight text-start text-white">
                        Min Capital
                      </h3>
                      <p className="text-lg font-extrabold text-white">₹ 50K</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-md font-extralight text-start text-white">
                        Win Ratio
                      </h3>
                      <p className="text-lg font-extrabold text-[#f4d35e]">
                        80.41%
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <Link to="/redrattle">
                <div className="bg-white transition-transform duration-300 transform hover:scale-110 shadow-lg mt-20 border rounded-3xl w-full overflow-hidden flex flex-col justify-between">
                  <div className="px-6 pt-6">
                    <div className="relative mb-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-outfit font-bold text-blue-900">
                          5 trades available.
                        </h2>
                        <FontAwesomeIcon
                          className="text-gray-500 text-2xl"
                          icon={faChevronRight}
                        />
                      </div>
                      <div className=" w-full border-b-2 mt-2 border-gray-300"></div>
                    </div>
                    <h1 className="text-4xl font-outfit font-extrabold text-gray-900 mb-6">
                      Red Rattle
                    </h1>

                    <div className="flex font-libre-baskerville   gap-2 whitespace-nowrap mb-6">
                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Options
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Weekly
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Medium Volatility
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#343a40] flex  font-outfit  justify-between py-2 px-4 ">
                    <div className="text-center mb-4">
                      <h3 className="text-md font-extralight text-start text-white">
                        Min Capital
                      </h3>
                      <p className="text-lg font-extrabold text-white">₹ 50K</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-md font-extralight text-start text-white">
                        Win Ratio
                      </h3>
                      <p className="text-lg font-extrabold text-[#f4d35e]">
                        80.41%
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>


          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <Link to="/catseye">
                <div className="bg-white transition-transform duration-300 transform hover:scale-110 shadow-lg mt-20 border rounded-3xl w-full overflow-hidden flex flex-col justify-between">
                  <div className="px-6 pt-6">
                    <div className="relative mb-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-outfit font-bold text-blue-900">
                          5 trades available.
                        </h2>
                        <FontAwesomeIcon
                          className="text-gray-500 text-2xl"
                          icon={faChevronRight}
                        />
                      </div>
                      <div className=" w-full border-b-2 mt-2 border-gray-300"></div>
                    </div>
                    <h1 className="text-4xl font-outfit font-extrabold text-gray-900 mb-6">
                    Cat's Eye
                    </h1>

                    <div className="flex font-libre-baskerville   gap-2 whitespace-nowrap mb-6">
                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Support
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Medium Volatility
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#343a40] flex  font-outfit  justify-between py-2 px-4 ">
                    <div className="text-center mb-4">
                      <h3 className="text-md font-extralight text-start text-white">
                        Min Capital
                      </h3>
                      <p className="text-lg font-extrabold text-white">₹ 50K</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-md font-extralight text-start text-white">
                        Win Ratio
                      </h3>
                      <p className="text-lg font-extrabold text-[#f4d35e]">
                        80.41%
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <Link to="/swingtrades">
                <div className="bg-white transition-transform duration-300 transform hover:scale-110 shadow-lg mt-20 border rounded-3xl w-full overflow-hidden flex flex-col justify-between">
                  <div className="px-6 pt-6">
                    <div className="relative mb-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-outfit font-bold text-blue-900">
                          5 trades available.
                        </h2>
                        <FontAwesomeIcon
                          className="text-gray-500 text-2xl"
                          icon={faChevronRight}
                        />
                      </div>
                      <div className=" w-full border-b-2 mt-2 border-gray-300"></div>
                    </div>
                    <h1 className="text-4xl font-outfit font-extrabold text-gray-900 mb-6">
                    SkyLarcs
                    </h1>

                    <div className="flex font-libre-baskerville   gap-2 whitespace-nowrap mb-6">
                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Swing
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Medium Volatility
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#343a40] flex  font-outfit  justify-between py-2 px-4 ">
                    <div className="text-center mb-4">
                      <h3 className="text-md font-extralight text-start text-white">
                        Min Capital
                      </h3>
                      <p className="text-lg font-extrabold text-white">₹ 50K</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-md font-extralight text-start text-white">
                        Win Ratio
                      </h3>
                      <p className="text-lg font-extrabold text-[#f4d35e]">
                        80.41%
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <Link to="/swingtrades">
                <div className="bg-white transition-transform duration-300 transform hover:scale-110 shadow-lg mt-20 border rounded-3xl w-full overflow-hidden flex flex-col justify-between">
                  <div className="px-6 pt-6">
                    <div className="relative mb-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-outfit font-bold text-blue-900">
                          5 trades available.
                        </h2>
                        <FontAwesomeIcon
                          className="text-gray-500 text-2xl"
                          icon={faChevronRight}
                        />
                      </div>
                      <div className=" w-full border-b-2 mt-2 border-gray-300"></div>
                    </div>
                    <h1 className="text-4xl font-outfit font-extrabold text-gray-900 mb-6">
                      Sky Hopper
                    </h1>

                    <div className="flex font-libre-baskerville   gap-2 whitespace-nowrap mb-6">
                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Swing
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Medium Volatility
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#343a40] flex  font-outfit  justify-between py-2 px-4 ">
                    <div className="text-center mb-4">
                      <h3 className="text-md font-extralight text-start text-white">
                        Min Capital
                      </h3>
                      <p className="text-lg font-extrabold text-white">₹ 50K</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-md font-extralight text-start text-white">
                        Win Ratio
                      </h3>
                      <p className="text-lg font-extrabold text-[#f4d35e]">
                        80.41%
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex-grow">
              <Link to="/swingtrades">
                <div className="bg-white transition-transform duration-300 transform hover:scale-110 shadow-lg mt-20 border rounded-3xl w-full overflow-hidden flex flex-col justify-between">
                  <div className="px-6 pt-6">
                    <div className="relative mb-4">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-outfit font-bold text-blue-900">
                          5 trades available.
                        </h2>
                        <FontAwesomeIcon
                          className="text-gray-500 text-2xl"
                          icon={faChevronRight}
                        />
                      </div>
                      <div className=" w-full border-b-2 mt-2 border-gray-300"></div>
                    </div>
                    <h1 className="text-4xl font-outfit font-extrabold text-gray-900 mb-6">
                      Dartix
                    </h1>

                    <div className="flex font-libre-baskerville   gap-2 whitespace-nowrap mb-6">
                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Swing
                        </h3>
                      </div>

                      <div className="p-1  border-violet-400 border-[1px] rounded-md">
                        <h3 className="text-md font-semibold text-gray-700">
                          Medium Volatility
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#343a40] flex  font-outfit  justify-between py-2 px-4 ">
                    <div className="text-center mb-4">
                      <h3 className="text-md font-extralight text-start text-white">
                        Min Capital
                      </h3>
                      <p className="text-lg font-extrabold text-white">₹ 50K</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-md font-extralight text-start text-white">
                        Win Ratio
                      </h3>
                      <p className="text-lg font-extrabold text-[#f4d35e]">
                        80.41%
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>



          



         
        </div>
      </div>
    </div>
  );
}

export default Strategies;
