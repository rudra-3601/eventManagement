import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const images = [
  "/artEvent.jpg",
  "/foodFes.jpg",
  "/techTalk.jpg",
  "/concert.jpg",
  "/artEvent.jpg",
  "/foodFes.jpg",
  "cricket.jpg"
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-600 mb-2">Event Gallery</h2>
          <p className="text-gray-500 text-lg">Moments we’ve captured across events</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-md group hover:scale-105 transform transition duration-300"
            >
              <img
                src={src}
                alt={`Event ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:brightness-75 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
