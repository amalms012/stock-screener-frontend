import React from 'react';
import NavBar from '../../components/navbar/Navbar';
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (

    <>

    <NavBar/>

    

    <div className="flex items-center justify-center h-[90vh] bg-white text-black">
      <div className="text-center flex flex-col justify-center items-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Qartelz Signals Pro
          </h1>
        <h1 className="text-3xl font-bold mb-4">
         Your Ultimate Trading Companion
        </h1>
        <p className="text-lg  w-3/5  text-gray-600 mb-6">
        Qartelz Signals Pro offers real-time signals for intraday, swing, and support trades, helping you make informed decisions and maximize your trading potential. Our platform provides expert analysis and actionable insights for traders of all levels.
        </p>
        <a
          href="/strategies" 
          className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-full hover:bg-blue-600 transition-colors duration-300"
        >
          Explore Now
          <FaArrowRight className="ml-2" />
        </a>
      </div>
    </div>

    



    

    </>

  );
};

export default HomePage;
