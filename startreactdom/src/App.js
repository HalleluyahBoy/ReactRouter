import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./pages/constact";
import Home from "./pages/home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import Personnel from "./pages/Personnel";
import PersonnelDetail from "./pages/PersonnelDetail";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // this is for routing without reloading the page
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Instructors" element={<Instructors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Personnel" element={<Personnel />} />
        <Route path="/Personnel/:id" element={<PersonnelDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
