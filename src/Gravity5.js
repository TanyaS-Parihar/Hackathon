import React, { useState, useEffect } from "react";
import Gravity2 from "./Gravity2";
import table from "./table.png";
import sitting from "./sitting.png";
import bird from "./bird.png";
import poo from "./poo.png";
import sad from "./sad.png";
import benchBg from "./benchBg.jpg";
import tissue from "./tissue.png";
import { useNavigate } from "react-router-dom";
import usingTissue from "./usingTissue.png";
function Gravity5() {
  const [move, setMove] = useState(false);
  const [moveAgain, setMoveAgain] = useState(false);
  const [sadd, setSadd] = useState(false);
  const [talk, setTalk] = useState(false);
  const [birdDissapear, setBirdDissapear] = useState(false);
  const [currentState, setCurrentState] = useState();
  const [useTissue, setUseTissue] = useState(false);
  const navigate = useNavigate();
  const useEffect = () => {
    const setMoveId = setTimeout(() => {
      setMove(true);
    }, 1000);
    const setMoveAgainId = setTimeout(() => {
      setMoveAgain(true);
    }, 2000);
    const setSaddId = setTimeout(() => {
      setSadd(true);
    }, 3500);
    const setBirdDissapearId = setTimeout(() => {
      setBirdDissapear(true);
    }, 2200);

    return (
      () => {
        clearTimeout(setMoveId);
        clearTimeout(setMoveAgainId);
        clearTimeout(setSaddId);
        clearTimeout(setBirdDissapearId);
      },
      []
    );
  };

  const changeText = () => {
    switch (currentState) {
      case "initial":
        return "Oh ewww... You dirty little bird";
      case "laugh":
        return "C'mon Dont Laugh now!";
      case "stranger":
        return "Oh thankyou so much";
      case "tissue":
        return "Oh Thanks";
      case "go":
        return "There are too many birds here today. Shall I go and sit under the tree?";
      case "tree":
        return "Yes,The shade looks good too ";
    }
  };

  const changeReply = () => {
    switch (currentState) {
      case "initial":
        return ["Hahhahaha", "Oh No! Here, Take this napkin!"];
      case "go":
        return [
          "Seems like that is the only option",
          "Its okay! Tree shade isnt also bad",
        ];
      case "laugh":
        return ["Alright..Alright..Sorry!", "Fine haha"];
    }
  };
  const Replies = changeReply();

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };
  return (
    <div className="box bg-zinc-900 ">
      <div className=" h-screen w-screen flex justify-center pt-[5%] ">
        <div className="bird p-[1rem]  h-[70%] w-[70%]  overflow-hidden  "></div>
        <div>
          <img
            src={bird}
            className={` h-[30%] absolute z-10 left-[10%] ${
              move ? "translate-x-[14rem] " : "translate-x-[0rem]"
            } transition duration-500 ease-linear ${
              moveAgain &&
              "translate-x-[60rem] transition duration-700 ease-linear"
            } ${birdDissapear && "opacity-0"}`}
          />
          {!useTissue && (
            <img
              src={poo}
              className={`h-[22%] z-10 absolute left-[10%] translate-x-[14rem] ${
                move
                  ? "transition duration-1000 ease-in opacity-[100%]"
                  : "opacity-0"
              }
          ${moveAgain && " top-[15%] scale-[2]"}
          
          ${sadd && "opacity-[0%] transition duration-75 "}`}
            />
          )}

          {!useTissue && (
            <img
              onTransitionEnd={() => {
                setTalk(true);
                handleStateChange("initial");
              }}
              src={sad}
              className={`h-[45%] z-10 absolute left-[27%] top-[28%] transition duration-100   ${
                sadd ? " opacity-[100%]  top-[15%]" : "opacity-0"
              } 
           
          `}
            />
          )}

          {/* <img
            className="absolute top-[40%] left-[20%] h-[10rem]"
            src={table}
          /> */}
          <img
            className="absolute z-0 top-[11%] left-[17%] h-[18rem] w-[65%] opacity-80"
            src={benchBg}
          />
          <img
            className={`absolute top-[28%] left-[25%] h-[10rem]  ${
              sadd && " opacity-0"
            }
            `}
            src={sitting}
          />
          {talk && (
            <div>
              <div className="absolute left-[20%] mt-[1rem] p-1 bg-white bg-opacity-85 text-black text-2xl">
                {changeText(currentState)}
              </div>
              {}{" "}
              {Replies && (
                <div className="absolute right-[20%] top-[75%] flex flex-col gap-4  ">
                  {" "}
                  <button
                    onClick={() => {
                      if (currentState == "go") {
                        setTimeout(() => {
                          navigate("/six");
                        }, 1000);
                      } else if (currentState == "laugh") {
                        handleStateChange("tissue");
                        setTalk(false);
                        setTimeout(() => {
                          setTalk(true);
                        }, 100);
                        const setuseTissueId = setTimeout(() => {
                          setUseTissue(true);
                        }, 1500);
                      } else handleStateChange("laugh");
                    }}
                    // onMouseEnter={handleTreeShade}
                    className="relative left-[22%] -top-[60%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
                  >
                    {Replies?.[0]}
                  </button>
                  <button
                    onClick={() => {
                      currentState == "go"
                        ? setTimeout(() => {
                            navigate("/six");
                          }, 1000)
                        : handleStateChange("tissue");
                      setTalk(false);
                      setTimeout(() => {
                        setTalk(true);
                      }, 100);
                      const setuseTissueId = setTimeout(() => {
                        setUseTissue(true);
                      }, 1500);
                    }}
                    // onMouseEnter={handleTreeShade}
                    className="relative left-[22%] -top-[20%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
                  >
                    {Replies?.[1]}
                  </button>
                </div>
              )}
              {currentState == "tissue" && (
                <img
                  className={`h-[10rem] absolute z-[999] right-[40%] top-[30%] -translate-x-[4rem] transition duration-500${
                    useTissue ? " opacity-[0%] " : "opacity-[100%]"
                  }`}
                  src={tissue}
                  alt="tissue"
                />
              )}
              <img
                onTransitionEnd={() => {
                  setTimeout(() => {
                    handleStateChange("go");
                  }, 1000);
                }}
                src={usingTissue}
                className={`h-[45%] z-10 absolute left-[20%] top-[28%] transition duration-100  ${
                  useTissue ? " opacity-[100%] " : "opacity-0"
                }
          `}
              />
              {currentState == "laugh" && (
                <div className="relative left-[22%] -top-[60%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80">
                  Here have a tissue
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Gravity5;
