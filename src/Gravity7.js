import React from "react";
import hill from "./utils/hill.png";
import hillBoyAlone from "./utils/hillBoyAlone.png";
import stone from "./stone.png";
import stick from "./stick.png";
import bunny from "./bunny.png";
import meadow from "./meadow.jpg";
import stoneThrowBoy from "./stoneThrowBoy.png";
import cartoongalaxy from "./cartoongalaxy.jpg";
import tug from "./tug.png";
import dog from "./dog.png";
import cat from "./cat.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Gravity7 = () => {
  const navigate = useNavigate();
  const [move, setMove] = useState(false);
  const [moveAgain, setmoveAgain] = useState(false);
  const [throwStone, setthrowStone] = useState(false);
  const [throwStoneDown, setthrowStoneDown] = useState(false);
  const [bunnyEntry, setbunnyEntry] = useState(false);
  const [bunnyJump, setBunnyJump] = useState(false);

  const [rabbit, setrabbit] = useState(false);
  const [boyFly, setBoyFly] = useState(false);
  const [oliverFly, setOliverFly] = useState(false);
  const [currentState, setCurrentState] = useState();
  const [showMagnetOption, setShowMagnetOption] = useState(false);
  const [introduceTeams, setIntroduceTeams] = useState(false);

  const setMoveId = setTimeout(() => {
    setMove(true);
  }, 1500);

  const changeTextRabbit = () => {
    switch (currentState) {
      case "rabbit":
        return "I will tell you why. It's because of Gravity, Oliver!";
      case "relax":
        return "Relax. There is nothing to be afraid of. I am Oliver's friend and now yours too!";
      case "indeed":
        return "Interesting? Yes Indeed! Hello!";
      case "grounded":
        return "It's 'Grav-i-ty' Oliver. It is actually what keeps me grounded and doesn't let me fly away when I jump. See!";
      case "magnet":
        return "You can think of it like an invisible magnet that pulls everything to the ground";
      case "click":
        return "You want to know? Imagine this to be a Non-Gravity zone. Now click on Oliver to see what would happen in absence of gravity";
      case "know":
        return "It's important. You know what would happen without it. Imagine this to be a Non-Gravity zone. Now click on Oliver to see what would happen in absence of gravity";
      case "imagination":
        return "Don't Worry.This is just imagination. Oliver is right here. Let's get him back";
      case "daresay":
        return "Yes. Infact, if I daresay, leave trees and mountains, even the earth wouldn't exist if there was no gravity. Gravity is holding all of it together";
      case "scatter":
        return "Yes, absolutely";
      case "every":
        return "Not only Earth Oliver..every object has this gravitational force";

      //case "good":
      //  return "That's a good question. Oliver, what game were you playing yesterday in school?";
      // case "play":
      //   return "Yes. And Have you ever played tug-of war like Oliver??";
      // case "yes":
      //   return "Oh great. So as you know basically in a tug-of-war, there are two teams pulling opposite ends of a rope.";

      // case "no":
      //   return "You will love it. Basically in a tug-of-war, there are two teams pulling the opposite ends of a rope.";
      // case "win":
      //   return "Now, Oliver, tell me how does one team win against another even though both teams are pulling the rope?";
      // case "force":
      //   return "Exactly. That means the team that applies more force wins over the other??";
      // case "similarly":
      //   return "Similarly, gravity is one team and your muscles are another team. Come lets learn";
      // case "introduce":
      //   return " Imagine Miss Meow as Gravity and Mr Woof as your muscles who applying force to make you jump. Lets repeat. Who is Miss Meow and Mr Woof?";
    }
  };
  // case "quitter":
  //   return "But gravity is no quitter. It doesn't give up and keeps on applying the force. And slowly gravity succeeds to pulls you back to the ground";

  const changeText = () => {
    switch (currentState) {
      case "hill":
        return "On the hill";
      case "see":
        return "You'll see!";
      case "rock":
        return "See this is the rock and I am throwing it high up ";
      case "down":
        return "and look... it still goes down";
      case "":
        return "and look... it still goes down";
      case "anywhere":
        return "Well I am just confused as to WHY does this come down? It could have gone up or anywhere else. But why only down.";
      case "how":
        return "But why.That's the question. Why and how?";
      case "what":
        return "What is Grav..ty Rabbit?";
      case "hi":
        return "Hi, And Woah! That was scary";
      case "wrong":
        return "Wow! Gravity is so powerful. See, I wasn't wrong and neither were my questions crazy. Do you agree now?";
      case "worries":
        return "No worries. It's okay";
      case "excuses":
        return "Now don't make excuses, haha.";
      case "new":
        return "But you know I am still confused about something?";
      case "doubt":
        return "Well Rabbit, how does this magnet come inside our earth?";
    }
  };
  // return "Rabbit, if Gravity pulls us all down why are we even able to jump. Shouldn't it stick us to the ground permanently like two magnets stick with each other?";
  // case "tug":
  //   return "Well, we were playing Tug-of-war";
  // case "point":
  //   return " The team that pulls harder and brings the other team past a certain point, wins ";

  if (currentState == "doubt") {
    setTimeout(() => {
      handleStateChange("good");
    }, 2000);
    setTimeout(() => {
      handleStateChange("tug");
    }, 5000);
    setTimeout(() => {
      handleStateChange("play");
    }, 7000);
  }

  const changeReply = () => {
    switch (currentState) {
      case "initial":
        return ["Where are we going?"];
      case "hill":
        return ["But why?"];
      case "discover":
        return [
          " Really?? As if none of us ever saw that before.(Poker Face)",
          "You really think you have discovered something new? The stones have been falling down for millions of years. What else were you expecting the stone to do??",
        ];
      case "":
        return [
          "You are overthinking. Have you seen anything going up? It all comes down.",
        ];

      case "rabbit":
        return [
          " Oh Talking Rabbit?? Interesting",
          " Speaking Rabbit???? Jesus! Scary",
        ];
      case "gravity":
        return [
          "You are telling what it does, Rabbit. But I still didn't get what is it?",
        ];

      case "magnet":
        return [
          "Ohh Wow! But what would happen if this invisible magnet called gravity is not there??",
          "Is it even important? Will there be any effect if it wasn't present??",
        ];
      case "gasp":
        return ["OMG! Where did Oliver go??", "Oliverrr! (Gasps)"];
      case "thank":
        return ["Oh Thank God! Hi Oliver! "];
      case "hi":
        return [
          "It was scary Indeed. So Rabbit, you mean to say that without gravity we all would fly away??",
          " Super Scary. No gravity means everything will scatter? Even trees and mountains? ",
        ];
      case "daresay":
        return ["Wow.. Fascinating!"];
      case "scatter":
        return ["Wow.. Fascinating!"];
      case "wrong":
        return [
          "Yeah...I am sorry for making fun of you (Sorry Face) ",
          "Naah. Actually I always believed in your abilities. Those were just jokes. You took them seriously? No man haha. (Sheepish smile)",
        ];
      case "new":
        return [
          "This time I won't stop you. Go ahead!",
          "You and your confusions. Alright. Say.",
        ];
      case "every":
        return ["Whattt?", "Is this a joke??"];
    }
  };

  // case "play":
  //   return [
  //     "Yes,I have",
  //     "No. Never got the chance but would like to someday.",
  //   ];
  // case "force":
  //   return ["Yes", "I think so "];

  const Replies = changeReply();

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };

  if (currentState == "see") {
    setTimeout(() => {
      //Stone throw begins
      handleStateChange("rock");
      setthrowStone(true);
    }, 1500);
  }

  if (currentState == "anywhere") {
    setTimeout(() => {
      setbunnyEntry(true);
      {
        bunnyEntry && handleStateChange("rabbit");
      }
    }, 2000);
  }
  if (currentState == "what") {
    setTimeout(() => {
      handleStateChange("grounded");
      setBunnyJump(true);
    }, 2000);
  }

  if (currentState === "relax" || currentState === "indeed") {
    setTimeout(() => {
      handleStateChange("what");
    }, 2000);
  }

  if (currentState == "grounded") {
    setTimeout(() => {
      handleStateChange("magnet");
    }, 8000);
  }

  if (currentState == "excuses" || currentState == "worries") {
    setTimeout(() => {
      handleStateChange("new");
    }, 2000);
  }
  if (currentState == "yes" || currentState == "no") {
    setTimeout(() => {
      handleStateChange("win");
    }, 2000);
  }

  if (currentState == "win") {
    setTimeout(() => {
      handleStateChange("point");
    }, 2000);
  }
  if (currentState == "point") {
    setTimeout(() => {
      handleStateChange("force");
    }, 2000);
  }
  // if (currentState == "force") {
  //   setTimeout(() => {
  //     handleStateChange("");
  //   }, 2000);
  // }

  return (
    <div className=" box bg-zinc-900">
      <div className=" h-screen w-screen flex justify-center pt-[5%] ">
        <div className="relative  h-[70%] w-[70%] overflow-hidden  ">
          <img className="absolute h-[140%] w-[100%]" src={meadow} alt="hill" />

          <img
            className={`absolute h-[140%] w-[100%] ${
              oliverFly
                ? "opacity-[100%] transition duration-[2500ms]"
                : "opacity-0"
            }`}
            src={cartoongalaxy}
            alt="hill"
          />
          {/* {introduceTeams && (
            <div className="flex relative top-[30%] left-[20%]  ">
              <img
                className={` h-36 z-[99] relative top-[90%] left-[30%] `}
                src={dog}
              />
              <h1 className="relative z-[99] text-white">Mr Woof</h1>
              <img
                className={` h-36 z-[99] relative top-[90%] left-24`}
                src={cat}
              />
              <h1 className="relative z-[99] text-white"> MissMeow </h1>
            </div>
          )} */}

          <img
            className={`absolute -top-[4rem] -left-[20%] h-[24rem] ${
              currentState == "introduce" && "-left-[30%]"
            } `}
            src={hill}
          />
          {!moveAgain && (
            <img
              onTransitionEnd={() => {
                handleStateChange("initial");
              }}
              className={`absolute top-[28%] left-[45%]
           z-10 h-[20rem] ${
             move && "-translate-x-[11rem]  transition duration-500 ease-linear"
           }  `}
              src={hillBoyAlone}
            />
          )}

          <img
            onClick={() => {
              if (oliverFly) {
                setBoyFly(true);
              }

              setTimeout(() => {
                handleStateChange("gasp");
              }, 2000);
            }}
            className={`absolute top-[28%] 
           z-10 h-[20rem] 
             ${
               moveAgain
                 ? "opacity-[100%] -scale-x-[1] -translate-x-[7rem] -translate-y-[4rem] transition duration-[250ms] ease-linear"
                 : "translate-x-[6rem] opacity-0 "
             }

            ${
              boyFly &&
              "absolute -translate-y-80 translate-x-6 transition duration-[4000ms] "
            }
// ${!boyFly && "select-none"}
              `}
            src={stoneThrowBoy}
          />

          {/* <img
            className={`absolute top-[28%] 
           z-9 h-[20rem]  -translate-x-[7rem] -translate-y-[4rem]
            

         
           
              `}
            src={stoneThrowBoy}
          /> */}

          {rabbit && (
            <img
              className={` absolute
               top-[28%] 
          -z-1 h-[9rem] ${
            bunnyEntry
              ? "opacity-[100%]  translate-y-[1rem] transition duration-[900ms] ease-out"
              : "-translate-x-[8rem] translate-y-[8rem] opacity-0"
          } ${bunnyJump && "bunny-jump"}
           
     
              `}
              src={bunny}
            />
          )}

          {moveAgain && (
            <img
              onTransitionEnd={() => {
                setTimeout(() => {
                  setthrowStoneDown(true);
                }, 1200);
                setTimeout(() => {
                  handleStateChange("down");
                }, 1500);
                setTimeout(() => {
                  handleStateChange("discover");
                }, 3500);
              }}
              className={`relative  
           z-[99] h-[16rem]
             translate-x-[2.5rem] 
             
             ${
               throwStone
                 ? " -translate-y-[4.5rem] translate-x-[3rem] transition duration-[700ms] delay-500 ease-linear"
                 : " translate-y-[7rem]"
             }
             }
               ${throwStoneDown && "transition duration-[10ms] ease-out "} 
             
             `}
              //opacity jab 100 jab stone throw hoga }
              src={stone}
            />
          )}
          <img
            className={` stonedown relative  
           z-[99] h-[16rem] 
             translate-x-[5rem] -translate-y-[30rem] 
      
           ${
             throwStoneDown &&
             "opacity-[100%] translate-y-[16rem] transition duration-[2000ms] ease-linear"
           } 
             }
             }`}
            //opacity jab 100 jab stone throw hoga }
            src={stone}
          />
          {/* <img
            onTransitionEnd={() => {
              setthrowStoneDown(true);
            }}
            className={`absolute
           z-[999] h-[16rem] 
             translate-x-[3rem]   -translate-y-[20rem] 
             
             ${moveAgain ? "opacity-[100%]  " : "opacity-0"}
             ${
               throwStone &&
               " -translate-y-[11rem] rotate(60deg)  translate-x-[3rem] transition duration-700 ease-linear"
             } 
             }
             }`}
            //opacity jab 100 jab stone throw hoga }
            src={stick}
          />
          <img
            className={` stonedown relative  
         z-[999] h-[16rem] 
           translate-x-[5rem] 
    
         ${
           throwStoneDown
             ? "opacity-[100%] translate-y-[16rem] rotate-[60deg] transition duration-[2000ms] ease-linear"
             : "-translate-y-[30rem] opacity-0 "
         } 
           }
           }`}
            //opacity jab 100 jab stone throw hoga }
            src={stick}
          />  */}
        </div>
      </div>
      <div className="absolute  left-[20%] top-[12%]  mt-[1rem] p-1 bg-white bg-opacity-85 text-black text-2xl">
        {changeText(currentState)}
      </div>
      <div className="absolute  left-[15%] top-[9%]  mt-[1rem] p-1 bg-white bg-opacity-85 text-black text-2xl">
        {changeTextRabbit(currentState)}
      </div>
      {Replies && (
        <div className="absolute right-[20%] top-[75%] flex flex-col gap-4  ">
          <button
            onClick={() => {
              if (currentState == "every") {
                navigate("/eight");
              } else if (currentState == "new") {
                handleStateChange("doubt");
                setTimeout(() => {
                  handleStateChange("every");
                }, 2000);
              } else if (currentState == "wrong") {
                handleStateChange("worries");
                setTimeout(() => {
                  handleStateChange("new");
                }, 2000);
              } else if (
                currentState == "scatter" ||
                currentState == "daresay"
              ) {
                handleStateChange("wrong");
              } else if (currentState == "hi") {
                handleStateChange("scatter");
              } else if (currentState == "thank") {
                handleStateChange("hi");
              } else if (currentState == "gasp") {
                handleStateChange("imagination");
                setTimeout(() => {
                  setOliverFly(false);
                  setBoyFly(false);
                }, 1000);
                setTimeout(() => {
                  handleStateChange("thank");
                }, 1300);
              } else if (currentState == "magnet") {
                setOliverFly(true);
                handleStateChange("click");
                setIntroduceTeams(true);
              } else if (currentState === "discover") {
                setrabbit(true);
                handleStateChange("anywhere");

                // handleStateChange("how");
              } else if (currentState == "rabbit") {
                handleStateChange("indeed");
              } else if (currentState == "hill") {
                handleStateChange("see");
              } else if (currentState == "initial") {
                handleStateChange("hill");
              }

              setTimeout(() => {
                setmoveAgain(true);
              }, 200);
            }}
            className=" z-[99] relative left-[22%] -top-[60%] rounded-full px-2 text-2xl bg-orange-600 hover:opacity-80"
          >
            {Replies?.[0]}
          </button>

          {Replies?.[1] && (
            <button
              onClick={() => {
                if (currentState == "joke") {
                  navigate("/eight");
                } else if (currentState == "doubt") {
                  handleStateChange("every");
                } else if (currentState == "new") {
                  handleStateChange("doubt");
                } else if (currentState == "wrong") {
                  handleStateChange("excuses");
                  setTimeout(() => {
                    handleStateChange("new");
                  }, 2000);
                } else if (currentState == "hi") {
                  handleStateChange("daresay");
                } else if (currentState == "gasp") {
                  handleStateChange("imagination");
                  setTimeout(() => {
                    setOliverFly(false);
                    setBoyFly(false);
                  }, 1000);
                  setTimeout(() => {
                    handleStateChange("thank");
                  }, 1300);
                } else if (currentState == "magnet") {
                  setOliverFly(true);
                  handleStateChange("know");
                } else if (currentState === "discover") {
                  setrabbit(true);
                  handleStateChange("anywhere");
                } else if (currentState === "rabbit") {
                  handleStateChange("relax");
                }
              }}
              className=" z-[99] relative left-[22%] -top-[60%] rounded-full  px-2 text-2xl bg-orange-600 hover:opacity-80"
            >
              {Replies?.[1]}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Gravity7;
