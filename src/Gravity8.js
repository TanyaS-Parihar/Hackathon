import React, { useEffect, useState } from "react";
import ropepulling from "./ropepulling.png";
import tug from "./tug.png";
import dog from "./dog.png";
import cat from "./cat.png";
import earth from "./earth.png";
import earthOliver from "./earthOliver.png";
import bunny from "./bunny.png";
import solar from "./solar.png";

import cartoongalaxy from "./cartoongalaxy.jpg";
import moon from "./moon.png";

import planet1 from "./planet1.png";
import planet2 from "./planet2.png";

const Gravity8 = () => {
  const [rope, setRope] = useState(false);
  const [currentState, setCurrentState] = useState();
  const [showDog, setShowDog] = useState();
  const [showCat, setShowCat] = useState();
  const [warBegins, setWarBegins] = useState();
  const [bgCome, setBgCome] = useState();
  const [showEarth, setShowEarth] = useState();
  const [move, setmove] = useState();
  const [scale, setscale] = useState();
  const [getMoon, setGetMoon] = useState();
  const [moonMove, setMoonMove] = useState();
  const [sunMove, setsunMove] = useState();
  const [getSun, setGetSun] = useState();
  const [getPlanet, setGetPlanet] = useState();
  const [planetMove, setplanetMove] = useState();
  const setRopeId = setTimeout(() => {
    setRope(true);
  }, 1500);
  useEffect(() => {
    handleStateChange("right");
    setBgCome(true);
    // setShowCat(true);
    // handleStateChange("introduce");
  }, []);

  const changeTextRabbit = () => {
    switch (currentState) {
      case "right":
        return "No. You heard it right. EVERY OBJECT has this gravitational force";
      case "feel":
        return "NO, We ARE attracting each other but we just cannot feel it.";

      case "masses":
        return "That's because our masses are very small as well as similar. Any substantial gravitational force can only be noticed if there is a significant difference between masses. Like you and the Earth, Oliver.The Earth is massive in your comparison.  ";
      case "you":
        return "  ";
      case "see":
        return " See Oliver this is you and this is our Earth. And do you know how much difference there is between the earth and you?? That huge! You are practically invisible. That's why we feel the effect of gravity so much.";
      case "moon":
        return " This same happens for the Earth And the Moon as well";
      case "too":
        return "Yes, it applies that far too. Even though Oliver Moon is huge but in comparison to Earth its still small. ";
      case "gasp":
        return "Yes! Earth and moon too. And Even though Oliver Moon is huge but in comparison to Earth its still small. ";
      case "quarter":
        return "Its just little over a quarter of earth in size and contains mass that is just 1.2% of earth's mass.";
      case "only":
        return " Infact the moon revovles only bcz gravity exits. Otherwise we would't have a moon  ";
      case "true":
        return " So true.";
      case "attract":
        return "Yes Oliver. But in that case it's the Sun that attracts. Because who's mass is larger?";
      case "correct":
        return " Correct! The sun has greater mass. So who will attract?";
      case "wrong":
        return " No! The sun has greater mass. So who will attract?";
      case "result":
        return "Yes. So, the sun attracts the earth and as a result it's the earth that revolves around sun. ";
      case "resultw":
        return "No.The sun attracts the earth and as a result it's the earth that revolves around sun. ";
      case "greater":
        return " Now I have a question. If there are these two planets, which among these will exert greater force on an object that is equidistant from both of them??";
      case "exert":
        return " Yes. The one with greater mass will exert more gravitational force. ";
      case "exert":
        return "Other than mass, the gravity is dependent on one other property.Do you know what is it?";
      case "exert":
        return "It's the distance between the masses.";
    }
  };

  const changeText = () => {
    switch (currentState) {
      case "none":
        return "But how is that possible? None of us is pulling each other like earth pulled the fruit and the stone?";
      case "cant":
        return "Why can't we?";
      case "big":
        return "Yes how?? The moon is so bigg itself. ";
      case "sun":
        return "Does Sun and Earth's revolution is also bcz of Gravity? Does Earth attract sun too??";
    }
  };

  const changeReply = () => {
    switch (currentState) {
      case "joke":
        return ["Whattt?", "Is this a joke??"];
      case "none":
        return [
          "Exactly, we aren't attracting each other like magnets",
          "True Rabbit. I think you are misinformed.",
        ];
      case "masses":
        return ["Ohhhh", "Hmmm.. Interesting"];
      case "see":
        return [
          "Wowww! We are just so small and insignificant in front of Earth",
        ];
      case "moon":
        return [
          "Earth and the Moon too??(Gasps) ",
          "The gravitational force affects thatt faaar??",
        ];
      case "quarter":
        return ["Oh! I see"];
      case "only":
        return [
          "OMG! Night without moon? Can't Imagine",
          "Woah! Our nights would have been so dark",
        ];
      case "attract":
        return ["Sun", "Earth"];
      case "correct" || "wrong":
        return ["Of course, Sun", "Of course, Earth"];
      case "correct" || "wrong":
        return ["Of course, Sun", "Of course, Earth"];
      case "greater":
        return [" Planet on Left", "Planet on Right"];
      //   "Oh then, my friend getting attracted to a classmate is due to Gravity??"
    }
  };

  const Replies = changeReply();

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };
  if (currentState == "right") {
    setTimeout(() => {
      handleStateChange("none");
    }, 2500);
  }
  if (currentState == "feel") {
    setTimeout(() => {
      handleStateChange("cant");
    }, 2500);
    setTimeout(() => {
      handleStateChange("masses");
    }, 5000);
  }

  if (currentState == "gasp") {
    setTimeout(() => {
      handleStateChange("quarter");
      setMoonMove(true);
    }, 3000);
  }

  if (currentState == "too") {
    setTimeout(() => {
      handleStateChange("quarter");
      setMoonMove(true);
    }, 3000);
  }
  if (currentState == "true") {
    setTimeout(() => {
      handleStateChange("sun");
      setGetMoon(false);
      setGetSun(true);
      setsunMove(true);
    }, 2000);
    setTimeout(() => {
      handleStateChange("attract");
    }, 4000);
  }

  return (
    <div>
      <div className="box bg-zinc-900">
        <div className="h-screen w-screen flex justify-center pt-[5%] ">
          <div className="relative h-[70%] w-[70%] bg-blue-400 overflow-hidden  ">
            {bgCome && (
              <img
                className={`absolute h-[140%] w-[100%]
             
                   ? "opacity-[100%] transition delay-[2000ms] duration-[5000ms] "
                   : " opacity-[100%]"
               }`}
                src={cartoongalaxy}
                alt="galaxy"
              />
            )}
            <img
              className={`absolute h-[50%] w-[40%] -left-28 top-[64%]
             
                  
              `}
              src={bunny}
              alt="bunny"
            />
            {showEarth && (
              <div>
                <img
                  className={`earth h-24 absolute top-[90%] left-[50%] ml-5 
                 -translate-y-[9rem]
                    
                  `}
                  src={earth}
                />
                <img
                  className={`earthy h-64 absolute top-[25%] left-[5%]  ml-5 
                

                 ${scale && "-scale-150"}
                  }`}
                  src={earthOliver}
                />
              </div>
            )}
            {getMoon && (
              <div>
                <img
                  className={` h-24 absolute top-[90%] left-10 ml-5 
                 -translate-y-[9rem]
                    ${
                      moonMove &&
                      "rotate-[180deg] scale-[1.3] transition duration-[5000ms]"
                    }
                  `}
                  src={moon}
                />
                <img
                  className={` h-24 absolute top-[90%] left-[50%] ml-5 
             -translate-y-[9rem]
                  ${
                    moonMove &&
                    "rotate-[180deg] scale-[2.5] transition  duration-[5000ms]"
                  }
              `}
                  src={earth}
                />
              </div>
            )}
            {getSun && (
              <div>
                {" "}
                <img
                  className={` h-[28rem]  absolute top-[60%] left-[15%] ml-5 
             -translate-y-[9rem]
                  ${sunMove && " animate-pulse duration-[1000ms]"}
              `}
                  src={solar}
                />
                <img
                  className={` h-10 absolute top-[105%] left-[40%] ml-5 
             -translate-y-[9rem]
                  ${
                    sunMove &&
                    " animate-pulse translate-x-[10rem] transition delay-[1000ms] duration-[10000ms]"
                  }
              `}
                  src={earth}
                />{" "}
              </div>
            )}

            {getPlanet && (
              <div>
                <img
                  className={` h-[20rem]  absolute top-[70%] left-[5%] ml-5  
             -translate-y-[9rem]
                  ${
                    planetMove &&
                    " scale-105 animate-pulse transition delay-[1000ms] duration-[1000ms]"
                  }
              `}
                  src={planet1}
                />
                <h1 className=" absolute top-[60%]  left-[35%] text-3xl">
                  Mass = 20units
                </h1>
              </div>
            )}

            {getPlanet && (
              <div>
                {" "}
                <img
                  className={` h-[32rem] w-[120%]  absolute -top-[80%] -left-[20%] ml-5 
             translate-x-[10rem] 
                  ${
                    planetMove &&
                    "scale-105 animate-pulse transition delay-[1000ms] duration-[10000ms]"
                  }
              `}
                  src={planet2}
                />
                <h1 className=" absolute top-[65%] left-[57%] text-3xl ">
                  Mass = 40units
                </h1>
              </div>
            )}
            {/* <div className="flex relative top-[30%] left-[10%]  ">
              {" "}
              <img
                className={` h-36 z-[99] relative top-[90%] left-[30%] ${
                  showDog
                    ? "scale-150 opacity-[100%] transition duration-[2000ms] delay-100"
                    : "opacity-0 scale-100"
                } `}
                src={dog}
              />
              <h1
                className={`relative z-[99] text-white  ${
                  showDog
                    ? "scale-150  opacity-[100%] transition duration-[2000ms] delay-100"
                    : "opacity-0 scale-100"
                }`}
              >
                Mr Woof = Muscle
              </h1>
              <img
                className={` h-36 z-[99] relative top-[90%] left-24 ${
                  showCat
                    ? "scale-150 opacity-[100%] transition duration-[2000ms] delay-300 "
                    : "opacity-0 scale-100"
                }`}
                src={cat}
              />
              <h1
                className={` relative z-[99] text-white  ${
                  showDog
                    ? "scale-150  opacity-[100%] transition duration-[5000ms] delay-100"
                    : "opacity-0 scale-100"
                } `}
              >
                Miss Meow = Gravity
              </h1>
            </div> */}
          </div>
          <div className="absolute  left-[0%] top-[12%]  mt-[1rem] p-1 bg-white bg-opacity-85 text-black text-2xl">
            {changeText(currentState)}
          </div>
          <div className="absolute  left-[5%] top-[9%]  mt-[1rem] p-1 bg-white bg-opacity-85 text-black text-2xl">
            {changeTextRabbit(currentState)}
          </div>
          {Replies && (
            <div className="absolute right-[20%] top-[75%] flex flex-col gap-4  ">
              <button
                onClick={() => {
                  if (currentState === "correct") {
                    handleStateChange("result");
                    setTimeout(() => {
                      handleStateChange("greater");
                      setGetPlanet(true);
                      setplanetMove(true);
                      setGetSun(false);
                      setsunMove(false);
                    }, 2000);
                  }
                  if (currentState === "attract") {
                    handleStateChange("correct");
                  }
                  if (currentState === "only") {
                    handleStateChange("true");
                    setGetMoon(false);
                    setTimeout(() => {
                      handleStateChange("sun");
                    }, 2000);
                    setTimeout(() => {
                      handleStateChange("attract");
                    }, 4000);
                  }
                  if (currentState === "quarter") {
                    handleStateChange("only");
                  }
                  if (currentState === "moon") {
                    handleStateChange("gasp");
                    setGetMoon(true);
                  }
                  if (currentState === "see") {
                    handleStateChange("moon");
                    setShowEarth(false);
                  }
                  if (currentState === "masses") {
                    handleStateChange("see");
                    setShowEarth(true);
                  }
                  if (currentState == "none") handleStateChange("feel");
                }}
                className=" z-[99] relative left-[22%] -top-[60%] rounded-full px-2 text-2xl bg-orange-600 hover:opacity-80"
              >
                {Replies?.[0]}
              </button>

              {Replies?.[1] && (
                <button
                  onClick={() => {
                    if (currentState === "wrong") {
                      handleStateChange("resultw");
                      setTimeout(() => {
                        handleStateChange("greater");
                      }, 2000);
                    }

                    if (currentState === "attract") {
                      handleStateChange("correct");
                    }
                    if (currentState === "only") {
                      handleStateChange("true");

                      setTimeout(() => {
                        handleStateChange("sun");
                        setsunMove(true);
                      }, 2000);
                      setTimeout(() => {
                        handleStateChange("attract");
                      }, 5000);
                    }
                    if (currentState === "moon") {
                      handleStateChange("too");
                      setGetMoon(true);
                    }
                    if (currentState === "see") {
                      handleStateChange("moon");
                    }
                    if (currentState === "masses") {
                      handleStateChange("see");
                      setShowEarth(true);
                    }
                    if (currentState == "none") handleStateChange("feel");
                  }}
                  className=" z-[99] relative left-[22%] -top-[60%] rounded-full  px-2 text-2xl bg-orange-600 hover:opacity-80"
                >
                  {Replies?.[1]}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gravity8;
