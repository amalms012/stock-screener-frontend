import React from "react";
import "./QuotesLoad.css";

const QuotesLoad = () => {
  return (
    <div
      id="page"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div id="container" className="text-center">
        <div
          id="ring"
          className="w-8 h-8  border-4 border-t-blue-500 border-solid rounded-full animate-spin"
        ></div>
        <div
          id="ring"
          className="w-8 h-8  border-4 border-t-blue-500 border-solid rounded-full animate-spin mt-2"
        ></div>
        <div
          id="ring"
          className="w-8 h-8  border-4 border-t-blue-500 border-solid rounded-full animate-spin mt-2"
        ></div>
        <div
          id="ring"
          className="w-8 h-8  border-4 border-t-blue-500 border-solid rounded-full animate-spin mt-2"
        ></div>
        <div
          id="h3"
          className="custom-pink  z-10 font-bold text-left w-[70%]  text-4xl "
        >
          {" "}
          “A budget tells us what we can't afford, but it doesn't keep us from
          buying it.”
          <hr className="my-4 border-t-2 border-gray-300" />
          <h2 className="text-xl text-bright-pink ml-10">William Feather</h2>
        </div>
      </div>
    </div>
  );
};

export default QuotesLoad;
