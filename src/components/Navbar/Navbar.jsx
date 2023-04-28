// import React, { useState } from "react";

import "./Navbar.css";

import { Box, Heading,Input, InputRightElement,InputGroup } from '@chakra-ui/react'
import MainNavbar from "./MainNavbar";

import { IoSearchSharp } from "react-icons/io5";


function Navbar({url}) {

  if(url==null){
     url="https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg"
  }

const url1={
  backgroundImage:`url(${url})`,
  backgroundRepeat:" no-repeat",
  backgroundSize: "cover",
  // height: "50vh",
  // width:"100%",
  backgroundPosition: "center"
}
  return (
    <div >
     

      <div style={url1} >

<MainNavbar  />

        
        <div>

          <Heading textAlign={"center"} color={"white"} my={"2%"}  display={{ base: "none", md: "block" }}>India's Largest Community of Travellers</Heading>
        </div>
        <Box mx={{
          base:"10%",
          lg:"25%"}}  paddingBottom={"8%"}>
        <InputGroup>
      
        <Input bg={"white"} py={"4%"} placeholder='Search for itineraries, destinations, hotels or activities'  className="inputClass" /> 
        <InputRightElement
         py={"4%"}
         mr={"2%"}
      pointerEvents='none'
      children={< IoSearchSharp size={"20"} />}
    />
        </InputGroup>
        </Box>
       
      </div>
    </div>
  );
}

export default Navbar;
