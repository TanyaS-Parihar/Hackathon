import React, { useState } from "react";
import template from "./template.png";
import Gravity3 from "./Gravity3";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Gravity2 = () => {
  const [isTranslate, setIsTranslate] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="box bg-zinc-900">
      <div className="h-screen w-screen flex justify-center pt-[5%] ">
        <div className="gravity2 p-[1rem]  h-[70%] w-[70%] bg-blue-400 overflow-hidden  ">
          <img
            className={` template h-[15rem] w-[20rem] pb-3 ${
              isTranslate &&
              "translate-x-[205%] transition duration-500 ease-linear"
            } `}
            src={template}
          />

          {!isTranslate && (
            <div className="bg-white opacity-85 px-2 text-black relative left-[45%] -top-[50%] text-2xl inline">
              Hi! I am Oliver and I live in Brainstown. Lets go!
            </div>
          )}

          <button
            onClick={() => {
              setIsTranslate(true);
              const timeoutId = setTimeout(() => {
                navigate("/three");
              }, 1000);
              return () => {
                clearTimeout(timeoutId);
              };
            }}
            className="rounded-full h-[2rem] px-2 ml-[15rem]  text-2xl bg-yellow-500 text-black hover:opacity-80"
          >
            Go with Oliver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gravity2;
