import React from "react";

import EventSchedule from "./EventSchedule";
import AboutSection from "./AboutSection ";

const Hero = () => {
  return (
    <>
      <section className="bg-[url(/sport.jpg)] bg-center bg-cover min-h-[90vh] flex items-center justify-center text-center px-4">
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold text-white">
            Welcome to the Sports Event Management Platform
          </h1>
          <p className="mt-4 text-white text-lg">
            Discover and join exciting sports events near you, whether local or
            national. Connect with fellow athletes, organize your own events,
            and be part of a thriving sports community.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Start Exploring
          </button>
        </div>
      </section>
      <AboutSection/>
      <EventSchedule />
    </>
  );
};

export default Hero;
