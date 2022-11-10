// import React, { useState } from "react";

import "./Navbar.css";

import { Heading } from '@chakra-ui/react'
import MainNavbar from "./MainNavbar";

const headingStyle = {
  color: "white",
  margin: "48px 48px 20px 48px"
}

function Navbar({url}) {

  if(url==null){
     url="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
  }

const url1={
  backgroundImage:`url(${url})`
}
  return (
    <div >
     

      <div style={url1} >

<MainNavbar />

        
        <div>

          <Heading style={headingStyle}>India's Largest Community of Travellers</Heading>
        </div>
        <input placeholder='Search for itineraries, destinations, hotels or activities'  className="inputClass" />
      </div>
    </div>
  );
}

export default Navbar;
