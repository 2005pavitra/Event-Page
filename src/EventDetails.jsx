import React, { useState, useEffect } from 'react';
import logo from './../public/logo.png';
import startup from './../public/startup.png';
import contact from './../public/contact.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/pagination'; // Optional styles for pagination
import 'swiper/css/navigation'; // Optional styles for navigation
import { Navigation, Pagination } from 'swiper/modules'; // Swiper modules

const EventDetails = () => {
    useEffect(() => {
        document.body.style.backgroundColor = '#040023';
        document.body.style.color = '#fff';

        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = '#040024';
        }
    }, []);


    const slidesData = [
        { id: 1, title: "1.Problem Statement:", description: "Clarity and significance of the problem being addressed." },
        { id: 2, title: "2.Scale and Scope of the Problem:", description: "The potential impact and relevance of the problem." },
        { id: 3, title: "3.Value Proposition: ", description: "Uniqueness and effectiveness of the solution." },
        { id: 4, title: "4.Team:", description: "Founders' backgrounds, experience, and qualifications" },
        { id: 5, title: "5.Solution (Design):", description: " Innovation and feasibility of the proposed solution." },
        { id: 6, title: "6.Competitive Landscape: ", description: "Understanding of the market and competitors." },
        { id: 7, title: "7.Business Model:", description: " Revenue model, scalability, and sustainability." },
        { id: 8, title: "8.Business Plan: ", description: "Coherence and strategic approach toward goals." },
        { id: 9, title: "9.Fund Requirement:", description: "Justification and allocation of funding needs." },
    ];

    <style jsx>{`
        .swiper-button-next, .swiper-button-prev {
          font-size: 18px; /* Adjust the size of the arrows */
        }
      
        /* On smaller screens */
        @media (max-width: 640px) {
          .swiper-button-next, .swiper-button-prev {
            font-size: 14px; /* Smaller arrows on mobile */
          }
        }
      `}</style>

    return (
        <div>
            {/* Header */}
            <header className="sticky top-0 z-10 text-white shadow-md">
                <div className="flex justify-between items-center p-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={logo} // Corrected logo path
                            alt="E-Cell Logo"
                            className="h-16 w-36 object-contain" // Adjust size as needed
                        />
                    </div>

                </div>
            </header>

            {/* Event Banner Section */}
            <section className="relative bg-cover bg-center" style={{ backgroundImage: `url(${startup})`, height: '400px' }}>
                <div className="absolute inset-0 bg-black opacity-90"></div>
                <div className="relative z-2 text-center text-white py-24">
                    <div className="flex items-center justify-center">
                        <FaMapMarkerAlt className="text-blue-500 mr-2" size={40} />
                        <p className="text-5xl font-bold">E-Cell Office, KRC Building, RGPV</p>
                    </div>
                    <p className="text-3xl mt-4">RGPV University’s Incubation Centre invites registered startups</p>
                </div>
            </section>

            {/* Event Details Section */}
            <section className="px-4 py-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h3 className="text-3xl font-semibold text-white mb-4">Event Details</h3>
                    <p className="text-lg text-gray-300 mb-6">
                        RGPV University’s Incubation Centre invites registered startups to a Pitching Session on 30th January 2025 at the RISE Building.
                        Present your innovative ideas to industry experts and investors based on criteria like problem statement, market scope, value proposition,
                        team credentials, solution design, competitive landscape, business model, plan, and funding requirements.
                        Gain feedback, mentorship, and potential funding opportunities. Don't miss this chance to take your startup to the next level!
                    </p>

                </div>
            </section>






            {/* Timeline Section */}
            <section className="px-4 py-12 ">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h3 className="text-3xl font-semibold mb-6">Event Timeline</h3>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* <div className="border-l-4 border-blue-500 h-full -left-4"></div> */}
                        </div>
                        <div className="space-y-18">
                            {/* Event Phases */}
                            <div className="relative flex justify-start items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 absolute -left-4 top-0"></div>
                                <div className="ml-10 text-left">
                                    <p className="text-xl font-bold">30th January 2025</p>
                                    <p className="text-md text-gray-300">Event Kickoff - Pitching Session Begins at 10:00 AM</p>
                                </div>
                            </div>



                            <div className="relative flex justify-start items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 absolute -left-4 top-0"></div>
                                <div className="ml-10 text-left">
                                    <p className="text-xl font-bold">10:30 AM - 12:00 PM</p>
                                    <p className="text-md text-gray-300">Startup Pitching - First Round</p>
                                </div>
                            </div>



                            <div className="relative flex justify-start items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 absolute -left-4 top-0"></div>
                                <div className="ml-10 text-left">
                                    <p className="text-xl font-bold">1:00 PM - 3:00 PM</p>
                                    <p className="text-md text-gray-300">Startup Pitching - Second Round</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <div className="slider-container ">
                <h3 className='text-3xl font-semibold my-6 flex justify-center item-center'>Evaluation Criteria</h3>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    className="mySwiper"
                >
                    {slidesData.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="slide-content text-center p-4 border-1 h-40 rounded-lg shadow-md hover:bg-gray-900">
                                <h2
                                    className="text-lg font-bold mb-2 truncate"
                                    style={{
                                        wordWrap: "break-word",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        whiteSpace: "nowrap",
                                    }}
                                >{slide.title}</h2>
                                <p className="text-gray-100 ">{slide.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            


            


            {/* Footer Section */}
            <footer className="text-center text-white py-4 mt-8">
                <p>&copy; 2025 E-Cell. All rights reserved.</p>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-gray-400">About Us</a>
                    <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default EventDetails;
