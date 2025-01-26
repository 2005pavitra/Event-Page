import React from "react";
import EventDetails from "./EventDetails";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventCard from "./EventCard";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<EventCard />} />
          <Route path="/eventdetails" element={<EventDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
