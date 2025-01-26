import React from "react";
import Spline from "@splinetool/react-spline";
import { Calendar, MapPin, Users, ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/IYxZUVZ9yECIjWSU/scene.splinecode" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl border border-white/20">
          <h1 className="text-5xl font-bold mb-6 text-white text-center">E-cell Rise 2025</h1>
          <p className="text-xl mb-8 text-white/90 text-center">Join us for the biggest entrepreneurship summit of the year. Connect with industry leaders, learn from experts, and take your startup journey to the next level.</p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-white/90 justify-center">
              <Calendar className="w-6 h-6" />
              <span>Jan 31, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-white/90 justify-center">
              <MapPin className="w-6 h-6" />
              <span>KRC RGPV</span>
            </div>
            <div className="flex items-center gap-3 text-white/90 justify-center">
              <Users className="w-6 h-6" />
              <span>500+ Attendees Expected</span>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2 transition-all">
              View Details
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
