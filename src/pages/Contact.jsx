import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-opacity-60 bg-blend-overlay"
      style={{ backgroundImage: "url('/galaxy.jpg')" }}
    >
      <Navbar />

      <section className="flex flex-col md:flex-row items-center justify-center px-10 py-12 h-[90vh] relative">
        <div className="text-gray-800 text-center space-y-6 z-10 md:w-1/2">
          <h1 className="text-[10rem] font-bold leading-tight">We</h1>
          <h2 className="text-5xl font-semibold">are here to help!</h2>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
          <div className="relative w-[90%] bg-gray-50 rounded-2xl shadow-lg p-8 z-10">
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-12 px-4 py-2 rounded-md bg-zinc-100"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-12 px-4 py-2 rounded-md bg-zinc-100"
                required
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 h-32 rounded-md bg-zinc-100 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className=" bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
