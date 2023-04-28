import React from "react";
import {  Route, Routes } from "react-router-dom";
import Home from "./Home";
import Packages from "./pages/Packages";
import Beaches from "./pages/Beaches";
import Heritage from "./pages/Heritage";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Mountaines from "./pages/Mountains";
import Form from "./pages/Form";

import Admin from "./Admin/Admin";
import VisitSingapore from "./pages/VisitSingapore";
import Navbar from "./Navbar/Navbar";



export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>

      <Route path="/navbar" element={<Navbar />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/Book" element={<Form />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Visit Singapore" element={<VisitSingapore />} />
      <Route path="/Beaches" element={<Beaches />} />
      <Route path="/Mountains" element={<Mountaines />} />
      <Route path="/Heritage" element={<Heritage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/Signup" element={<Signup />} />


      {/* <Route path="/check" element={<Check />} /> */}

    </Routes>
  );
}
