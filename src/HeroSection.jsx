import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-900 to-black text-white flex items-center justify-center h-screen overflow-hidden">
      <div className="absolute inset-0">
        <spline-viewer 
          url="https://prod.spline.design/IYxZUVZ9yECIjWSU/scene.splinecode"
          className="w-full h-full"
        ></spline-viewer>
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg border border-blue-700">
            <h3 className="text-3xl font-extrabold mb-4">RISE Startup Pitch</h3>
            <p className="text-lg mb-6">Exciting upcoming event!</p>
            <ul className="text-base mb-6">
              <li className="flex items-center">
                <span className="material-icons text-blue-400 mr-2">event</span>
                Jan 31, 2025
              </li>
            </ul>
            <button className="bg-white text-blue-800 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100">
              View Details
            </button>
          </div>
          <div>
            <spline-viewer 
              url="https://prod.spline.design/IYxZUVZ9yECIjWSU/scene.splinecode"
              className="w-full h-96 md:h-full rounded-lg"
            ></spline-viewer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
