import React from "react";
import EventCard from "../components/EventCard";
import { events } from "../data/eventData";

const EventSchedule = () => {
  return (
    <section className="min-h-[80vh] bg-gray-50 flex items-center justify-center p-2">
      <div className="w-full rounded-3xl bg-white p-5 space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-2xl  text-purple-600 font-extrabold tracking-widest">
            Schedule Details
          </h1>
          <p className="text-gray-600 mt-3 text-lg">
            Discover the upcoming events and join us for insightful sessions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((eventData, index) => (
            <EventCard key={index} {...eventData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
