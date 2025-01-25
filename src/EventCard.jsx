import React, { useState, useEffect } from "react";
import logo from "./../public/logo.png";
import Card from "./Card";

const App = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom,#040023,rgb(1, 1, 94), #040023)";
    document.body.style.color = "#fff";
    document.body.style.fontFamily = "Times New Roman, sans-serif";

    const header = document.querySelector("header");
    if (header) {
      header.style.backgroundColor = "#040024";
    }
  }, []);

  return (
    <div className="min-h-screen mx-2">
      {/* Header */}
      <header className="sticky top-0 z-10 text-white shadow-md">
        <div className="flex justify-between items-center p-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="h-10 sm:h-6 lg:h-12 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Toggle Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            showUpcoming ? "opacity-bg-blue-700 text-white" : "opacity-bg-gray-100 text-gray-800"
          }`}
          onClick={() => setShowUpcoming(true)}
        >
          Upcoming Events
        </button>
        <button
          className={`px-4 py-2 rounded ${
            !showUpcoming ? "opacity-bg-blue-700 text-white" : "opacity-bg-gray-100 text-gray-800"
          }`}
          onClick={() => setShowUpcoming(false)}
        >
          Past Events
        </button>
      </div>

      {/* Section Content */}
      {showUpcoming ? (
        <section
          id="upcoming"
          className="py-8 px-4 border-b-2 border-gray-200 rounded"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Upcoming Events</h2>
          <Card />
        </section>
      ) : (
        <section
          id="past"
          className="py-8 px-4 border-b-2 min-h-120 border-gray-200 rounded"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Past Events</h2>
          <p className="text-center mt-[2vmax] text-2xl">No past event records...</p>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center text-white py-4 bottom-0 w-full">
        <p>&copy; 2025 E-Cell. All rights reserved.</p>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#privacy" className="hover:text-gray-400">
            Privacy Policy
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default App;
