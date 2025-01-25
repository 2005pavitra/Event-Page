import React, { useEffect } from "react";
import logo from "./../public/logo.png";
import contact from "./../public/contact.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const EventDetails = () => {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(to right,#040023,rgb(1, 1, 94), #040023)";
    document.body.style.color = "#fff";
    document.body.style.fontFamily = "Times New Roman, sans-serif";
  }, []);

  const slidesData = [
    {
      id: 1,
      title: "Problem Statement",
      description: "Clarity and significance of the problem being addressed.",
    },
    {
      id: 2,
      title: "Scale and Scope of the Problem",
      description: "The potential impact and relevance of the problem.",
    },
    {
      id: 3,
      title: "Value Proposition",
      description: "Uniqueness and effectiveness of the solution.",
    },
    {
      id: 4,
      title: "Team",
      description: "Founders' backgrounds, experience, and qualifications.",
    },
    {
      id: 5,
      title: "Solution (Design)",
      description: "Innovation and feasibility of the proposed solution.",
    },
    {
      id: 6,
      title: "Competitive Landscape",
      description: "Understanding of the market and competitors.",
    },
    {
      id: 7,
      title: "Business Model",
      description: "Revenue model, scalability, and sustainability.",
    },
    {
      id: 8,
      title: "Business Plan",
      description: "Coherence and strategic approach toward goals.",
    },
    {
      id: 9,
      title: "Fund Requirement",
      description: "Justification and allocation of funding needs.",
    },
  ];

  return (
    <div className="mx-2">
      {/* Header */}
      <header className="header sticky top-0 z-10 h-[5vmax] p-2 text-white shadow-md bg-[#040024]">
        <div className="flex justify-between items-center p-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="h-10 sm:h-6 lg:h-12 w-[10vmax] object-contain"
            />
          </div>
        </div>
      </header>

      {/* Event Banner Section */}
      <section className="banner w-5/6 text-center relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 py-6 px-4 mx-auto min-h-[70vh] bg-gradient-to-b from-[#040023] via-[#01015e] to-[#040023]">
        {/* Left Content */}
        <div className="relative z-2 text-white py-8 px-6 lg:py-20 lg:px-10 flex flex-col items-start justify-center gap-6 lg:w-1/2">
          <h2 className="text-xl lg:text-3xl font-bold text-center lg:text-left leading-snug">
            Elevate Your Startup Journey!
          </h2>
          <p className="text-md lg:text-lg text-gray-300 tracking-wide leading-8 text-center lg:text-left">
            Join us at <b>RGPV University's Incubation Centre</b> and pitch your
            innovative ideas to leading industry experts and investors. Gain
            invaluable feedback and funding opportunities.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={contact}
            alt="Event Illustration"
            className="w-full lg:w-[85%] rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* Event Details Section */}
      <section className="details px-4 py-8 bg-gradient-to-t from-[#040023] via-[#01015e] to-[#040023]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-white mb-4">
            Event Details
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            RGPV University's Incubation Centre invites registered startups to a
            Pitching Session on 30th January 2025 at the RISE Building. Present
            your innovative ideas to industry experts and investors based on
            criteria like problem statement, market scope, value proposition,
            team credentials, solution design, competitive landscape, business
            model, plan, and funding requirements. Gain feedback, mentorship,
            and potential funding opportunities. Don't miss this chance to take
            your startup to the next level!
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline px-4 py-12 lg:flex lg:items-center lg:justify-center lg:min-h-screen bg-gradient-to-b from-[#040023] via-[#01015e] to-[#040023]">
        <div className="max-w-4xl text-center text-white">
          <h3 className="text-3xl font-semibold mb-8">Event Timeline</h3>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center h-5/6 -left-1 bg-blue-500 w-1.5"></div>
            <div className="space-y-16">
              {/* Event Phase 1 */}
              <div className="relative flex justify-start items-center">
                <div className="lg:w-8 lg:h-8 sm:w-6 sm:h-6 w-4 h-4 rounded-full bg-blue-500 absolute transform -translate-x-1/2 top-0"></div>
                <div className="ml-10 text-left">
                  <p className="text-xl font-bold">30th January 2025</p>
                  <p className="text-md text-gray-400">Event Kickoff</p>
                </div>
              </div>

              {/* Event Phase 2 */}
              <div className="relative flex justify-start items-center">
                <div className="lg:w-8 lg:h-8 sm:w-6 sm:h-6 w-4 h-4 rounded-full bg-blue-500 absolute transform -translate-x-1/2 top-0"></div>
                <div className="ml-10 text-left">
                  <p className="text-xl font-bold">10:30 AM</p>
                  <p className="text-md text-gray-400">Reporting Time</p>
                </div>
              </div>

              {/* Event Phase 3 */}
              <div className="relative flex justify-start items-center">
                <div className="lg:w-8 lg:h-8 sm:w-6 sm:h-6 w-4 h-4 rounded-full bg-blue-500 absolute transform -translate-x-1/2 top-0"></div>
                <div className="ml-12 text-left">
                  <p className="text-xl font-bold">11 AM - 3:00 PM</p>
                  <p className="text-md text-gray-400">Startup Pitching</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <div className="slider-container evaluation px-8 py-12 bg-gradient-to-r from-[#040023] via-[#01015e] to-[#040023]">
        <h3 className="text-3xl font-semibold my-6 text-center">
          Evaluation Criteria
        </h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id} className="px-2">
              <div className="slide-content shadow-lg shadow-cyan-500/50 text-center p-6 border h-40 rounded-lg shadow-md hover:border-blue-300 transition-all duration-300">
                <h2 className="text-lg font-extrabold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm text-gray-200 mt-4">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Footer Section */}
      <footer className="text-center text-white py-4 mt-8 bg-[#040024]">
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

export default EventDetails;
