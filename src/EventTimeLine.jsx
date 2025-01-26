import React from "react";

export function EventTimeline() {
  return (
    <div className="w-full max-w-[25rem] md:max-w-xl lg:max-w-full mx-auto px-4">
      <div className="flex flex-col gap-10">
        {/* Event Kickoff */}
        <div className="relative flex items-center gap-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8   flex items-center justify-center rounded-full border border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm8 2V3H6v1h8zM5 8h10v8H5V8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-16 w-px bg-gray-600 hidden md:block"></div>
          </div>
          <div className="flex-1 p-6 border-3 border-cyan-500 rounded-lg shadow-lg  shadow-cyan-500/50 ">
            <h6 className="text-lg font-semibold text-white">31th January 2025</h6>
            <p className="text-base text-gray-400">Event Kickoff</p>
          </div>
        </div>

        {/* Reporting Time */}
        <div className="relative flex items-center gap-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8   flex items-center justify-center rounded-full border border-cyan-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 8.586V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="h-16 w-px bg-gray-600 hidden md:block"></div>
          </div>
          <div className="flex-1 p-6 border border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 ">
            <h6 className="text-lg font-semibold text-white">10:30 AM</h6>
            <p className="text-base text-gray-400">Reporting Time</p>
          </div>
        </div>

        {/* Startup Pitching */}
        <div className="relative flex items-center gap-6 flex-wrap md:flex-nowrap">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8   flex items-center justify-center rounded-full border border-cyan-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 11a1 1 0 011-1h12.586l-2.293-2.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L15.586 12H3a1 1 0 01-1-1z" />
              </svg>
            </div>
          </div>
          <div className="flex-1 p-6 border border-cyan-500 rounded-lg shadow-lg shadow-cyan-500/50 ">
            <h6 className="text-lg font-semibold text-white">11 AM - 3:00 PM</h6>
            <p className="text-base text-gray-400">Startup Pitching</p>
          </div>
        </div>
      </div>
    </div>
  );
}
