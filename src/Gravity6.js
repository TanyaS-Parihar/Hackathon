import React, { useEffect, useState } from "react";
import tree from "./tree.png";
import template from "./template.png";
import apple from "./apple.png";
import sadBoy from "./sadBoy.png";
import secondHitBoy from "./secondHitBoy.png";
import secondHitDown from "./secondHitDown.png";
import secondHit from "./secondHit.png";
import { useNavigate } from "react-router-dom";
const Gravity6 = () => {
  const [drop, setDrop] = useState(false);
  const [move, setMove] = useState(false);
  const [fall, setFall] = useState(false);
  const [secondBoy, setSecondBoy] = useState(false);
  const [currentState, setCurrentState] = useState();
  const [throwApple, setThrowApple] = useState(false);
  const [appleHit, setappleHit] = useState(false);
  const [agnAppleDrop, setAgnAppleDrop] = useState(false);
  const [hideApple, setHideApple] = useState(false);
  const navigate = useNavigate();
  const setMoveId = setTimeout(() => {
    setMove(true);
  }, 2000);
  setTimeout(() => {
    setDrop(true);
  }, 3500);
  if (currentState == "wait") {
    setTimeout(() => {
      handleStateChange("ground");
      setSecondBoy(true);
    }, 1000);
  }
  const changeText = () => {
    switch (currentState) {
      case "initial":
        return "The shade is good too. Let's lie down here itself.";
      case "appleFall":
        return "Ouchhh";
      case "angry":
        return "Will anyone today let me enjoy peacefully? (angrily)";

      case "everything":
        return "First the bird and now the fruit. Everything is dropping on me!";
      case "but":
        return "But...";
      case "question":
        return "Suddenly I have got a question in mind";
      case "confused":
        return "Ha ha ha very funny. No, seriously I am confused";
      case "listen":
        return "Will you listen to me once?";
      case "why":
        return "I am confused that why did these things fall down on me";
      case "up":
        return " No,I am serious. Why did those things fall down on me? Those won't fall up on me.";
      case "wait":
        return "I mean..Wait. I'll show you";
      case "ground":
        return "See that apple is down on the ground.. and now it won't come and hit me here when I am above it. It could only fall on me when it was above me.";
      case "hit":
        return "How?";
      case "ouch":
        return "Ouchh!! Very funny. I meant by itself. It can't hit by itself";
      case "challenge":
        return "Another apple falls down";

      case "prove":
        return "But it kinda proved my point";

      case "come":
        return "Oh! Stop it! I'll show you. Come with Me. ";
    }
  };

  const changeReply = () => {
    switch (currentState) {
      case "everything":
        return ["Yeah it's sad. Poor you", "Seems like it's a bad day!"];
      case "but":
        return ["But? What but?"];
      case "question":
        return ["What is the question?", "Do you even have a mind?"];
      case "confused":
        return [
          "Thats because you are stupid",
          "Well confusion leads to answers. Say, What is it?",
        ];
      case "listen":
        return ["Yeah yeah. Go on"];
      case "why":
        return [
          "Because you are the chosen one",
          " Are you kidding? What kind of question is that??",
        ];
      // Did you get hurt too hard on your head?
      case "up":
        return [
          "You need a doctor. Doctooooor(yells)",
          " Fall up?? That's not even correct grammer. How hard did that thing hit you?",
        ];
      case "ground":
        return ["You know, actually it can hit you from ground too."];

      case "haha":
        return ["  Hahahahaahaa (Hearty Laugh)"];
      case "ouch":
        return ["  Hahahahaahaa (Hearty Laugh)"];
      case "challenge":
        return [
          "Haha Seems like you have hurt that fruit's ego by challenging him",
          "Ha ha ha the fruit proved you wrong.",
        ];

      case "prove":
        return [
          "How? Now you are just making things up.",
          "You are blabbering. I am telling you need a doctor. Doctorrrrr(yells)",
        ];
      case "come":
        return ["Go with Oliver"];
      // case "laugh":
      //   return [
      //     "You fogot that it did hit you when i threw it",
      //     " The bump on the right hand side of your head says otherwise.",
      //   ];
      // case "laugh":
      //   return [
      //     " Oh That you threw on me.It didnt come on its own.The apple that fell on me, did.",
      //     " The bump on the right hand side of your head says otherwise.",
      //   ];
      // case "laugh":
      //   return [
      //     " Oh my Brain hurts. Sstop it... Will you?",
      //     " Oh I'll get crazy. What do you even want to say?",
      //   ];
    }
  };
  const Replies = changeReply();

  const handleStateChange = (newState) => {
    setCurrentState(newState);
  };

  useState(() => {
    handleStateChange("initial");
  }, []);

  return (
    <div>
      {" "}
      <div className="box bg-zinc-900">
        <div className="h-screen w-screen flex justify-center pt-[5%] ">
          <div className="gravity6 p-[1rem]  h-[70%] w-[70%] bg-blue-400 overflow-hidden  ">
            {" "}
            <img
              className="h-[45rem] relative z-9 bottom-[120%] "
              src={tree}
              alt="tree"
            />
            <img
              className={`h-[35%] absolute left-[5%] top-[45%] ${
                move &&
                "translate-x-[22rem] transition duration-[1200ms] ease-linear "
              }
              ${fall && "opacity-0"}`}
              src={template}
              alt="boy"
            />
            $
            {!secondBoy && (
              <img
                className={`h-[65%] absolute left-[13%] top-[29%] opacity-0 
              ${fall && "opacity-[100%]"}
                translate-x-[11rem] 
              
               `}
                src={sadBoy}
                alt="sadBoy"
              />
            )}
            <img
              onTransitionEnd={() => {
                setFall(true);
                handleStateChange("appleFall");
                setTimeout(() => {
                  handleStateChange("angry");
                }, 1000);

                setTimeout(() => {
                  handleStateChange("everything");
                }, 2500);
              }}
              className={`h-[55%] absolute top-[20%] translate-x-[7rem]  ${
                drop &&
                " translate-y-[5rem] transition duration-200 ease-linear"
              }
             
              ${fall && "opacity-0  "}`}
              //
              src={apple}
              alt="apple"
            />
            {/* {!hideApple && ( */}
            <img
              onTransitionEnd={() => {
                handleStateChange("haha");

                setTimeout(() => {
                  handleStateChange("challenge");
                }, 100);

                setTimeout(() => {
                  setHideApple(true);
                }, 1500);
              }}
              className={`h-[55%] z-10 absolute top-[20%] translate-x-[7rem]  ${
                agnAppleDrop
                  ? " translate-y-[7rem] transition duration-800 ease-linear"
                  : "opacity-0"
              }`}
              //
              src={apple}
              alt="apple"
            />
            {!throwApple && (
              <img
                className={`h-[55%] absolute top-[65%] translate-x-[11rem]  
               ${fall ? "opacity-[100%]" : "opacity-0 "}
               `}
                src={apple}
                alt="apple"
              />
            )}
            {!appleHit && (
              <img
                onTransitionEnd={() => {
                  setappleHit(true);
                  handleStateChange("haha");
                }}
                className={`throwApple h-[55%] z-10 absolute top-[90%] left-[40%] opacity-0
                ${
                  throwApple &&
                  " opacity-[100%] -translate-x-[13rem] -translate-y-[18rem] rotate-45  scale-y-125 transition duration-[1000ms]"
                }
               `}
                src={apple}
                alt="apple"
              />
            )}
            <img
              onTransitionEnd={() => {
                handleStateChange("ouch");

                setTimeout(() => {
                  setAgnAppleDrop(true);
                }, 2000);
              }}
              className={`h-[35%] absolute top-[48%] translate-x-[13rem]

              ${
                appleHit
                  ? "opacity-[100%] transition duration-200"
                  : "opacity-0"
              }`}
              src={secondHitDown}
              alt="boy"
            />
            {!appleHit && (
              <img
                className={`h-[50%] absolute top-[33%] translate-x-[9rem]
              ${
                secondBoy
                  ? "opacity-[100%] transition duration-300"
                  : "opacity-0"
              }`}
                src={secondHitBoy}
                alt="boy"
              />
            )}
          </div>{" "}
          <div>
            <div className="absolute left-[17%] mt-[1rem] p-1 bg-white bg-opacity-85 text-black text-2xl">
              {changeText(currentState)}
            </div>

            {Replies && (
              <div className="absolute right-[20%] top-[75%] flex flex-col gap-4  ">
                {" "}
                <button
                  onClick={() => {
                    if (currentState == "come") {
                      setTimeout(() => {
                        navigate("/seven");
                      }, 1000);
                    }
                    if (currentState == "ground") {
                      handleStateChange("hit");
                      setThrowApple(true);
                    }
                    switch (currentState) {
                      case "prove":
                        return handleStateChange("come");
                      case "challenge":
                        return handleStateChange("prove");
                      case "ground":
                        return;
                      case "wait":
                        return handleStateChange("ground");
                      case "up":
                        return handleStateChange("wait");
                      case "why":
                        return handleStateChange("up");
                      case "question":
                        return handleStateChange("why");
                      case "but":
                        return handleStateChange("question");
                      case "everything":
                        return handleStateChange("but");
                    }
                  }}
                  className="relative left-[22%] -top-[60%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
                >
                  {Replies?.[0]}
                </button>
                {Replies?.[1] && (
                  <button
                    onClick={() => {
                      if (currentState == "come") {
                        setTimeout(() => {
                          navigate("/seven");
                        }, 1000);
                      }

                      switch (currentState) {
                        case "prove":
                          return handleStateChange("come");
                        case "challenge":
                          return handleStateChange("prove");
                        case "up":
                          return handleStateChange("wait");
                        case "why":
                          return handleStateChange("up");
                        case "confused":
                          return handleStateChange("why");
                        case "question":
                          return handleStateChange("confused");
                        case "confused":
                          return handleStateChange("why");
                        case "everything":
                          return handleStateChange("but");
                      }
                    }}
                    className="relative left-[22%] -top-[20%] rounded-full h-[2rem] px-2 text-2xl bg-orange-600 hover:opacity-80"
                  >
                    {Replies?.[1]}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gravity6;
