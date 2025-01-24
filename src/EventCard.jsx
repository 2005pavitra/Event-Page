import React, { useState, useEffect } from 'react';
import logo from './../public/logo.png';
import startup from './../public/startup.png';
import { FaCalendarAlt } from 'react-icons/fa';

const App = () => {

    useEffect(() => {
        document.body.style.background = "linear-gradient(to right,#040023,rgb(1, 1, 94), #040023)";
        document.body.style.color = '#fff';
        document.body.style.fontFamily = 'Times New Roman, sans-serif';
        // // document.body.style.backgroundImage = `url(${startup})`;
        // document.body.style.backgroundSize = 'cover';
        // document.body.style.backgroundRepeat = 'no-repeat';
        // document.body.style.backgroundAttachment = 'fixed';

        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = '#040024';
        }
    }, []);

    const events = [
        { id: 1, title: 'Rise Startup Pitch', date: 'Jan 30, 2025', description: 'Exciting upcoming event!' },
    ];

    return (
        <div className='min-h-screen mx-2'>
            {/* Header */}
            <header className="sticky top-0 z-10 text-white shadow-md">
                <div className="flex justify-between items-center p-2">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="E-Cell Logo"
                            className="h-6 sm:h-6 lg:h-12 object-contain"
                        />
                    </div>
                </div>
            </header>


            {/* Hero Section */}


            {/* Upcoming Events */}
            <section id="upcoming" className="py-8 px-4 s">
                <h2 className="text-4xl font-bold mb-6 text-center ">Upcoming Event...</h2>
                <div className="flex flex-col gap-8 ">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="flex flex-col lg:flex-row items-center rounded-lg shadow-lg hover:shadow-xl p-6 gap-6"
                        >
                            {/* Image on the left */}
                            <img
                                src={startup}
                                alt="Event"
                                className="lg:w-160  pr-12 w-full rounded-lg"
                            />

                            {/* Content on the right */}
                            <div className="lg:w-2/3 w-full flex flex-col">
                                <h3 className="text-5xl font-bold mb-2">{event.title}</h3>
                                <p className="text-gray-100 text-2xl mb-4">{event.description}</p>
                                <p className="text-gray- text-2xl font-bold flex items-center mb-4">
                                    <FaCalendarAlt className="text-blue-500 mr-2" size={20} />
                                    {event.date}
                                </p>
                                <a
                                    type="button"
                                    href="/eventdetails"
                                    className="mt-auto text-blue-500 hover:text-blue-700 border-2 border-blue-500 px-4 py-2 rounded-lg self-start"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Footer */}
            <footer className="text-center text-white py-4 bottom-0 w-full">
                <p>&copy; 2025 E-Cell. All rights reserved.</p>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-gray-400">About Us</a>
                    <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default App;
