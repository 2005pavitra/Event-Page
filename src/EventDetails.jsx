import React, { useState, useEffect } from "react";
import logo from "./../public/logo.png";
import startup from "./../public/startup.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import contact from "./../public/contact.png";


const EventDetails = () => {
    useEffect(() => {
        document.body.style.background =
            "linear-gradient(to right,#040023,rgb(1, 1, 94), #040023)";
        document.body.style.color = "#fff";
        document.body.style.fontFamily = "Times New Roman, sans-serif";



        const header = document.querySelector(".header");
        if (header) {
            header.style.background = "#040024";
        }
        const banner = document.querySelector(".banner");
        if (banner) {
            banner.style.background = "linear-gradient(to bottom,#040023,rgb(1, 1, 94), #040023)";
        }
        const timeline = document.querySelector(".timeline");
        if (timeline) {
            timeline.style.background = "linear-gradient(to bottom,#040023,rgb(1, 1, 94), #040023)";
        }
        const details = document.querySelector(".details");
        if (details) {
            details.style.background = "linear-gradient(to up,#040023,rgb(1, 1, 94), #040023)";
        }
        const evaluation = document.querySelector(".evaluation");
        if (evaluation) {
            evaluation.style.background = "linear-gradient(to right,#040023,rgb(1, 1, 94), #040023)";
        }
        
    }, []);

    const slidesData = [
        {
            id: 1,
            title: "1.Problem Statement:",
            description: "Clarity and significance of the problem being addressed.",
        },
        {
            id: 2,
            title: "2.Scale and Scope of the Problem:",
            description: "The potential impact and relevance of the problem.",
        },
        {
            id: 3,
            title: "3.Value Proposition: ",
            description: "Uniqueness and effectiveness of the solution.",
        },
        {
            id: 4,
            title: "4.Team:",
            description: "Founders' backgrounds, experience, and qualifications",
        },
        {
            id: 5,
            title: "5.Solution (Design):",
            description: " Innovation and feasibility of the proposed solution.",
        },
        {
            id: 6,
            title: "6.Competitive Landscape: ",
            description: "Understanding of the market and competitors.",
        },
        {
            id: 7,
            title: "7.Business Model:",
            description: " Revenue model, scalability, and sustainability.",
        },
        {
            id: 8,
            title: "8.Business Plan: ",
            description: "Coherence and strategic approach toward goals.",
        },
        {
            id: 9,
            title: "9.Fund Requirement:",
            description: "Justification and allocation of funding needs.",
        },
    ];

    <style jsx>{`
    .swiper-button-next,
    .swiper-button-prev {
      font-size: 18px; /* Adjust the size of the arrows */
    }

    /* On smaller screens */
    @media (max-width: 640px) {
      .swiper-button-next,
      .swiper-button-prev {
        font-size: 14px; /* Smaller arrows on mobile */
      }
    }
  `}</style>;

    return (
        <div className="mx-2">
            {/* Header */}
            <header className="header sticky top-0 z-10 text-white shadow-md">
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

            {/* Event Banner Section */}
            <section
                className="banner w-5/6 text-center relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 py-6 px-4 mx-auto"
                style={{ minHeight: '70vh' }}
            >
                {/* Left Content */}
                <div className="relative z-2 text-white py-6 px-4 lg:py-24 lg:px-6 flex flex-col items-start justify-center gap-4 lg:w-1/2">
                    <div className="flex lg:flex-col sm:flex-row justify-center items-center">
                        {/* Text */}
                        <p className="text-3xl lg:text-5xl font-bold text-center lg:text-left">
                            E-Cell Office, KRC Building, RGPV
                        </p>
                    </div>
                    <p className="text-lg lg:text-2xl px-2 text-center lg:text-left">
                        RGPV University's Incubation Centre invites registered startups.
                    </p>
                </div>

                {/* Right Image */}
                <img
                    src={contact}
                    alt="Event"
                    className="lg:w-160 w-full rounded-lg"
                />
            </section>

            {/* Event Details Section */}
            <section className="details px-4 py-8">
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
            <section className="timeline px-4 py-12 lg:flex lg:items-center lg:justify-center lg:min-h-screen">
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


            <div className="slider-container evaluation ">
                <h3 className="text-3xl font-semibold my-6 flex justify-center item-center">
                    Evaluation Criteria
                </h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        1024: { slidesPerView: 4 },
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
                        <SwiperSlide key={slide.id}>
                            <div className="slide-content text-center p-4 border-1 h-40 rounded-lg shadow-md  hover:border-blue-300  transition-all duration-300">
                                <h2
                                    className="text-sm font-bold mb-2 truncate"
                                    style={{
                                        wordWrap: "break-word",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    {slide.title}
                                </h2>
                                <p className="text-gray-100 text-2sm">{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <hr />

            {/* Footer Section */}
            <footer className="text-center text-white py-4 mt-8">
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
