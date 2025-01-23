import React, { useState, useEffect } from 'react';
import logo from './../public/logo.png';
import startup from './../public/startup.png';
import { FaCalendarAlt } from 'react-icons/fa';

const App = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#040023';
        document.body.style.color = '#fff';

        const header = document.querySelector('header');
        if (header) {
            header.style.backgroundColor = '#040024';
        }
    }, []);

    const events = [
        { id: 1, title: 'Rise Startup Pitch', date: 'Jan 30, 2025', description: 'Exciting upcoming event!' },
    ];

    return (
        <div>
            {/* Header */}
            <header className="sticky top-0 z-10 text-white shadow-md">
                <div className="flex justify-between items-center p-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <img
                            src={logo}
                            alt="E-Cell Logo"
                            className="h-16 w-36 object-contain"
                        />
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="text-center z-2 py-4">
                <p className="text-4xl font-bold mt-4">Explore our Upcoming and Past Events</p>
            </section>

            {/* Upcoming Events */}
            <section id="upcoming" className="py-8 px-4 flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
                <div className="flex flex-col sm:flex-row items-center  justify-center gap-6">
                    {events.map((event) => (
                        <div key={event.id} className="flex flex-col items-center border lg:w-200 sm:w-80 mx-4 sm:mx-12 rounded-lg p-4 shadow-md hover:shadow-lg">
                            <img src={startup} alt="" className="pb-4" />
                            <h3 className="text-2xl font-semibold">{event.title}</h3>
                            <p className="text-gray-100 mt-2">{event.description}</p>
                            <p className="text-gray-100 font-bold flex py-4">
                                <FaCalendarAlt className="text-blue-500 mr-2" size={20} />
                                {event.date}
                            </p>
                            <a
                                type='button'
                                href='/eventdetails'
                                className="mt-4 text-blue-500 hover:text-blue-700 border-2 border-blue-500 px-4 py-2 rounded-lg"
                            >
                                View Details
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="text-center bg-gray-800 text-white py-4">
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
