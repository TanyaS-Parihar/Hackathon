import React from "react";
import template from "./template.png";
import city from "./city.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Gravity3 = () => {
  const [isTranslate, setIsTranslate] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="box bg-zinc-900">
      <div className="h-screen w-screen flex justify-center pt-[5%] ">
        <div className="  h-[70%] w-[70%] overflow-hidden ">
          <div className="px-1 bg-[#f5f5f5] opacity-85 text-black text-2xl flex ml-[1rem] mt-[1rem] absolute z-10 ">
            Oliver: Nice weather! I feel like going to the park. Would you like
            to go?
          </div>
          <div className="absolute right-[10%] top-[75%] z-10  flex  gap-[2rem]">
            <button
              onClick={() => {
                setIsTranslate(true);
                const timeoutId = setTimeout(() => {
                  navigate("/four");
                }, 1300);
              }}
              className=" rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
            >
              Yeah Sure.{" "}
            </button>
            <button
              onClick={() => {
                setIsTranslate(true);
                const timeoutId = setTimeout(() => {
                  navigate("/four");
                }, 1000);
              }}
              className="rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
            >
              Yes. Some greenery and fresh air would be good.
            </button>
          </div>
          <img
            className="cityBg h-full w-full -top-[5%] relative  opacity-[90%] "
            src={city}
          />
          <img
            className={`relative -top-[60%] h-[10rem] ${
              isTranslate
                ? "translate-x-[250%] transition duration-1000 ease-linear"
                : "-translate-x-[5rem]"
            }`}
            src={template}
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Gravity3;
