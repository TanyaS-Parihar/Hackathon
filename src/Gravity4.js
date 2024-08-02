import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import template2 from "./template2.png";
import template from "./template.png";
import template4 from "./template4.png";
import publicPark from "./publicPark.jpg";
import parkChair from "./parkChair.png";

const Gravity4 = () => {
  const navigate = useNavigate();
  const [transform, setTransform] = useState(false);
  return (
    <div className="box bg-zinc-900">
      <div className="h-screen w-screen pt-[5%] ">
        <div className="park p-[1rem] m-auto h-[70%] w-[70%] flex  ">
          <div className="">
            {" "}
            {/* <img className="w-[50rem] h-full" src={template4} /> */}
            <img
              className="absolute h-[35%] top-[40%] left-[20%]"
              src={template}
            />
          </div>
          <div>
            <div className="bg-white bg-opacity-85 text-black text-2xl ">
              Oliver: Oh its lovely! I feel like sitting here and enjoying the
              weather. Where should i sit?
            </div>
          </div>
        </div>
        <div className="  flex flex-col items-center gap-5">
          <button
            onClick={() => {
              setTransform(true);

              const timeoutId = setTimeout(() => {
                navigate("/four");
              }, 1000);
              return () => {
                clearTimeout(timeoutId);
              };
            }}
            className="relative left-[25%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
          >
            On the bench there under the open blue sky!
          </button>
          <button
            onClick={() => {
              const timeoutId = setTimeout(() => {
                navigate("/four");
              }, 1000);
              return () => {
                clearTimeout(timeoutId);
              };
            }}
            // onMouseEnter={handleTreeShade}
            className="relative left-[22%] -top-[20%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
          >
            {" "}
            That tree shade looks really comforting. Lets go there.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gravity4;
