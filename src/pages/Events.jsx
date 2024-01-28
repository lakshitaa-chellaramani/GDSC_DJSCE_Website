
import React, { useState } from "react";
import eventData from "../lib/events-data";
import EventCard from "../components/events/EventCard";
import leftDel from "../assets/events/leftDel.png";
import rightDel from "../assets/events/rightDel.png";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    console.log(eventData);
  }, []);

  const [upcomingEvent, setUpcomingEvent] = useState(true);
  const [cardFlippedId, setCardFlippedId] = useState(null)
  return (
    <div className="">
      <div>
        <p className="max-lg:text-[5vw] max-sm:text-[8vw] text-[50px] w-fit m-auto text-center my-3 font-montserrat relative text-blue-950">
          Events
          <span
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 inline-block w-full h-1 "
            style={{
              backgroundImage:
                "linear-gradient(to right, red, red,red, yellow,yellow, yellow, green,green, green, blue,blue, blue)",
            }}
          ></span>
        </p>
      </div>
      <div className="max-md:text-[30px] mx-auto text-center flex justify-between w-[550px] mt-10  text-[35px] max-sm:text-[5vw] max-md:w-[80%]  font-gSans">
        <button
          className="inline-block w-[50%]"
          onClick={() => {setUpcomingEvent(true); setCardFlippedId(null)}}
        >
          <img
            src={leftDel}
            alt="leftDel"
            className="h-[2.5vw] max-sm:h-[5vw] inline-block mr-4 transition-all duration-500"
            style={upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
          Upcoming{" "}
          <img
            src={rightDel}
            alt="rightDel"
            className="h-[2.5vw] max-sm:h-[5vw] inline-block duration-500"
            style={upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
        </button>
        <button
          className="inline-block w-[50%]"
          onClick={() => {setUpcomingEvent(false); setCardFlippedId(null);}}
        >
          <img
            src={leftDel}
            alt="leftDel"
            className="h-[2.5vw] max-sm:h-[5vw] inline-block mr-4 transition-all duration-500"
            style={!upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
          Past{" "}
          <img
            src={rightDel}
            alt="rightDel"
            className="h-[2.5vw] max-sm:h-[5vw] inline-block duration-500"
            style={!upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
        </button>
      </div>
      {upcomingEvent && <div className="w-[80%] md:w-[85%] lg:w-[85%] m-auto flex justify-evenly flex-wrap mt-10 p-5 gap-10 max-sm:gap-20 md:gap-20 transition-all">
        {eventData
          .filter((element) =>
            upcomingEvent ? element.upcoming : !element.upcoming
          )
          .map((card) => {
            return (
              <EventCard
                card={card}
                id={card.id}
                upcoming={upcomingEvent}
                small={"false"}
                setCardFlippedId={setCardFlippedId}
                cardFlippedId={cardFlippedId}
              />
            );
          })}
      </div>}
      {!upcomingEvent && <div className="w-[50%] md:w-[85%] lg:w-[85%] m-auto flex justify-evenly flex-wrap mt-10 p-5 gap-10 max-sm:gap-20 md:gap-20 transition-all">
        {eventData
          .filter((element) =>
            upcomingEvent ? element.upcoming : !element.upcoming
          )
          .map((card) => {
            return (
              <EventCard
                card={card}
                id={card.id}
                upcoming={upcomingEvent}
                small={"false"}
                setCardFlippedId={setCardFlippedId}
                cardFlippedId={cardFlippedId}
              />
            );
          })}
      </div>}
    </div>
  );
};

export default Events;