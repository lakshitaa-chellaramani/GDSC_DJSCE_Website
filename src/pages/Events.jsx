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
  return (
    <div className="">
      <div>
        <p className="text-[3em] w-fit m-auto text-center my-3 font-montserrat relative text-blue-950">
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
      <div className="mx-auto text-center flex justify-between w-[35%] mt-10 text-[2em] font-mono">
        <button
          className="inline-block w-[50%]"
          onClick={() => setUpcomingEvent(true)}
        >
          <img
            src={leftDel}
            alt="leftDel"
            className="h-10 inline-block mr-4 transition-all duration-500"
            style={upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
          Upcoming{" "}
          <img
            src={rightDel}
            alt="rightDel"
            className="h-10 inline-block duration-500"
            style={upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
        </button>
        <button
          className="inline-block w-[50%]"
          onClick={() => setUpcomingEvent(false)}
        >
          <img
            src={leftDel}
            alt="leftDel"
            className="h-10 inline-block mr-4 transition-all duration-500"
            style={!upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
          Past{" "}
          <img
            src={rightDel}
            alt="rightDel"
            className="h-10 inline-block duration-500"
            style={!upcomingEvent ? { opacity: "100" } : { opacity: "0" }}
          />
        </button>
      </div>
      <div className="w-[50%] md:w-[85%] lg:w-[85%] m-auto flex justify-evenly flex-wrap mt-10 p-5 gap-10 transition-all">
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
              />
            );
          })}
      </div>
    </div>
  );
};

export default Events;
