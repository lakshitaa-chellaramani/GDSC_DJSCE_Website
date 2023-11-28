import React, { useState } from "react";
import eventData from "../../lib/events-data";
import plus from "../../resources/events/plus.png";
import plusBack from "../../resources/events/plusBack.png";
const EventCard = () => {
  const firstCard = eventData[0];
  const [flipped, setFlipped] = useState(false);
  const toggleClass = () => {
    const card = document.getElementById("card");
    console.log("toggled");
    if (!flipped) {
      card.style.transform = "rotateY(180deg)";
      setFlipped(true);
    } else {
      card.style.transform = "rotateY(0deg)";
      setFlipped(false);
    }
  };
  return (
    <>
      <div className="group card-holder w-[25%] h-[27em]">
        <div
          id="card"
          className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d]"
        >
          <div
            className="absolute border-solid border-2 border-green-600 h-full card"
            style={{
              backgroundImage: firstCard.frontBg,
              backgroundSize: "auto 27rem",
            }}
          >
            <div
              className="h-full"
              style={{ color: `${firstCard.titleFrontColor}` }}
            >
              <div className="flex flex-col px-3 w-[75%] font-roboto pt-[25%] h-[90%]">
                <span className="text-4xl leading-[1.3em] font-semibold">
                  <p>{firstCard.titleFrontTop}</p>
                  <p>{firstCard.titleFrontBottom}</p>
                </span>
                <span className="text-lg leading-[1.3em]">
                  <p className="mt-4">{firstCard.descBack}</p>
                </span>
              </div>
              <div className="mt-auto pl-3 font-light w-full flex justify-between">
                <span className="">
                  <p className="inline-block">Date: {firstCard.date}</p>
                </span>
                <div className="inline-block">
                  <button className="mt-2 mr-1" onClick={() => toggleClass()}>
                    <img src={plus} alt="" className="w-12" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Back side  */}

          <div className="absolute h-[27em] w-full card card-back [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div
              className="absolute border-solid border-2 border-red-600 h-full card w-full"
              style={{
                backgroundImage: firstCard.backBg,
                backgroundSize: "auto 27rem",
              }}
            >
              <div
                className="h-full"
                style={{ color: `${firstCard.backColor}` }}
              >
                <div className="flex justify-center flex-col">
                <span className="text-2xl leading-[1.3em] font-semibold text-center mt-2">
                  <p>{firstCard.titleFrontTop} {firstCard.titleFrontBottom}</p>
                  
                </span>
                </div>
                
                <div className="mt-auto pl-3 font-light w-full flex justify-end">                 
                  <div className="inline-block">
                    <button className="mt-2 mr-1" onClick={() => toggleClass()}>
                      <img src={plusBack} alt="" className="w-12" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-5" onClick={() => toggleClass()}>
        <img src={plus} alt="" className="w-12" />
      </button>
    </>
  );
};

export default EventCard;
