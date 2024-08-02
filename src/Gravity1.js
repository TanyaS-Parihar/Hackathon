import React from "react";

const Gravity1 = () => {
  return (
    <div className="box bg-zinc-900">
      <div className="h-screen w-screen flex justify-center pt-[5%] ">
        <div className="gravity1 p-[1rem]  h-[70%] w-[70%]  bg-blue-400  "></div>
      </div>
      <div className="relative -top-[5vw] flex justify-center pb-[4rem]">
        <button className="px-[8rem] py-[1rem]  bg-orange-600">Start</button>
      </div>
    </div>
  );
};

export default Gravity1;
