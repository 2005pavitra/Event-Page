import React, { useEffect } from "react";
import logo from "./../public/logo.png";
import contact from "./../public/contact.png";
import contact1 from "./../public/rb_1775.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { EventTimeline } from "./EventTimeLine";
// import { HeroSection } from "./HeroSection";
// import HeroSection from "./HeroSection";

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
    <div className="min-h-screen mx-2">
      {/* Header */}
      <header className="header left-0 sticky top-0 z-10 p-2 text-white shadow-md bg-[#040024]">
        <div className="flex justify-between items-center p-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 left-0">
            <img
              src={logo}
              alt="E-Cell Logo"
              className="h-10 sm:h-8 lg:h-12 w-auto object-contain"
            />
          </div>
        </div>
      </header>

      {/* Event Banner Section */}
      <section className="banner w-5/6 text-center relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 py-6 px-4 mx-auto min-h-[70vh] bg-gradient-to-b from-[#040023] via-[#01015e] to-[#040023]">
        <div className="relative z-2 text-white py-8 px-6 lg:py-20 lg:px-10 flex flex-col items-start justify-center gap-6 lg:w-1/2">
          <h2 className="text-xl lg:text-4xl font-bold text-center lg:text-left leading-snug bg-gradient-to-r from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-transparent select-none shadow-[0_0_20px_2px]">
            Elevate Your Startup Journey!
          </h2>
          <p className="text-md lg:text-lg text-gray-300 tracking-wide leading-8 text-center lg:text-left">
            Join us at <b>RGPV University's Incubation Centre</b> and pitch your
            innovative ideas to leading industry experts and investors. Gain
            invaluable feedback and funding opportunities.
          </p>
          <button
            className="bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              window.location.href = "mailto:rise@rgpv.ac.in";
            }}
          >
            Apply Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={contact1}
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
            RGPV University's Incubation Centre is now accepting applications
            for the next round of start-up nominations! This is a fantastic
            opportunity for student entrepreneurs to receive mentorship,
            funding, and valuable resources to bring their innovative ideas to
            life. Submission ends on the 31st of January, 2025.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline px-4 py-12 lg:px-8 lg:py-16 lg:flex lg:items-center lg:justify-center lg:min-h-screen bg-gradient-to-b from-[#040023] via-[#01015e] to-[#040023]">
        <div className=" text-center text-white max-w-screen-lg mx-auto">
          <h3 className="text-3xl font-semibold mb-8">Event Timeline</h3>
          <EventTimeline />
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
              <div className="slide-content border-indigo-500 shadow-lg shadow-indigo-500/50 text-center p-6 border-4 h-40 rounded-lg  hover:border-blue-300 shadow-lg shadow-cyan-500/50 transition-all duration-300">
                <h2 className="text-lg font-extrabold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm text-gray-200 mt-4">
                  {slide.description}
                </p>
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
