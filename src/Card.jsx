import React from 'react'
import startup from "./../public/startup.png";
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function Card() {
    const events = [
        {
          id: 1,
          title: "RISE Startup Pitch",
          date: "Jan 30, 2025",
          description: "Exciting upcoming event!",
        },
      ];
    
  return (
      <div className="flex flex-col gap-8">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col lg:flex-row items-center rounded-lg shadow-md hover:shadow-lg p-6 gap-6"
            >
              {/* Image on the left */}
              <img
                src={startup}
                alt="Event"
                className="lg:w-170  pr-12 w-full rounded-lg"
              />

              {/* Content on the right */}
              <div className="lg:w-2/3 w-full flex flex-col">
                <h3 className="text-5xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-100 text-2xl mb-4">
                  {event.description}
                </p>
                <p className="text-gray- text-2xl font-bold flex items-center mb-4">
                  <FaCalendarAlt className="text-blue-500 mr-2" size={20} />
                  {event.date}
                </p>
                <Link
                  to={"/eventdetails"}
                  // type="button"
                  // href="/eventdetails"
                  className="mt-auto text-blue-500 hover:text-blue-700 border-2 border-blue-500 px-4 py-2 rounded-lg self-start"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
  )
}

export default Card
