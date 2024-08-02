import React from "react";
import introPic from "./introPic.png";
const WelcomePage = () => {
  return (
    <div className="welcome text-6xl w-screen h-screen flex flex-col justify-center items-center ">
      <div
        className={`intro
     text-black border-2 border-white p-6 hover:scale-150 underline  `}
      >
        Introduction to Gravity
      </div>{" "}
      <button className="p-[1rem] rounded-3xl mt-[1rem] hover:border-2 hover:border-black bg-red-200 text-orange-900 ]">
        Start Playing
      </button>
      <img src="" />
    </div>
  );
};

export default WelcomePage;
