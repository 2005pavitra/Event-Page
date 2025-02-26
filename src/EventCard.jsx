import React, { useState, useEffect } from "react";
import logo from "./../public/logo.png";
import Card  from "./Card.jsx";
import { events } from "./Events.jsx";


const App = () => {
  const [showUpcoming, setShowUpcoming] = useState(true);


  const currDate = new Date();


  const UpcomingEvents = events.filter(
    (event) => new Date(event.date) >= currDate
  );

  const PastEvents = events.filter(
    (event) => new Date(event.date) < currDate
  );

  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to bottom, #040023, rgb(1, 1, 94), #040023)";
    document.body.style.color = "#fff";
    document.body.style.fontFamily = "Times New Roman, sans-serif";
  }, []);

  return (
    <div className="min-h-screen mx-2">
      {/* Header */}
      <header className="header fixed top-0 left-0 w-full z-10 p-2 text-white shadow-md bg-[#040024]">
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center mx-2 space-x-2">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="h-10 sm:h-8 lg:h-12 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* Toggle Buttons */}
      <div className="flex justify-center py-20 mt-10 space-x-4">
        <button
          className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${showUpcoming
              ? "text-white border-2 border-gray-300"
              : "border-2 border-blue-700"
            }`}
          onClick={() => setShowUpcoming(true)}
        >
          Upcoming Events
        </button>
        <button
          className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${!showUpcoming
              ? "text-white border-2 border-gray-300"
              : "border-2 border-blue-700"
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
          {UpcomingEvents.length > 0 ? (
            UpcomingEvents.map((event) => (
              <Card key={event.id} events={[event]} />
            ))
          ) : (
            <p className="text-center mt-[2vmax] text-2xl">
              No upcoming event records...
            </p>
          )}
        </section>
      ) : (
        <section
          id="past"
          className="py-8 px-4 border-b-2 min-h-120 border-gray-200 rounded"
        >
          <h2 className="text-4xl font-bold mb-6 text-center">Past Events</h2>
          {PastEvents.length > 0 ? (
            PastEvents.map((event) => (
              <Card key={event.id} events={[event]} />
            ))
          ) : (
            <p className="text-center mt-[2vmax] text-2xl">
              No past event records...
            </p>
          )}
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
