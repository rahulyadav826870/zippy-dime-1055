import React from 'react'

import { navItems } from "./NavItems";

import Dropdown from "./Dropdown";
// import navbarBackgroud from "../images/navbarBackgroud.jpg";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from 'react';
import { Box, Flex, Text,Image } from '@chakra-ui/react';
// import { Input } from "@chakra-ui/react"
// import { useState } from "react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, Button } from "@chakra-ui/react";
import {HamburgerIcon  } from "@chakra-ui/icons";
export default function MainNavbar() {
  const [dropdown, setDropdown] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <Box >

<Flex className='fold' justifyContent={"space-between"} alignItems={"center"}>  

<Button border={"0px solid"} ml="3%" display={{ base: "block", md: "none",lg:"none" }} variant="outline" onClick={onOpen} mr={2}>
        <HamburgerIcon   fontSize={"25px"}  marginLeft= "-5px" color={"white"}/>
      </Button>
      <Drawer  placement={placement} onClose={ onClose} isOpen={isOpen}>
        <DrawerOverlay  />
        <DrawerContent bg={"#57773c"}>
          <DrawerCloseButton />
         <Link to={"/"}> <DrawerHeader  display={"flex"} justifyContent={'center'}alignItems={"center"} color={"blue.300"} fontWeight={"bold"}><Image src={logo}  link="/" alt="" className="image" mr={"-7%"} />
            TravelWorld</DrawerHeader></Link>
          <DrawerBody>
           <Link to={"/Book"}><Text fontSize={"18px"} ml={"4%"} my={"1%"} cursor={"pointer"}>Book</Text></Link>

           <Link to={"/packages"}><Text fontSize={"18px"}  ml={"4%"} my={"1%"}>Packages</Text></Link>

           <Link to={"/Visit Singapore"}><Text fontSize={"18px"}  ml={"4%"} my={"1%"}>Visit Singapore</Text></Link>

           <Link to={"/Beaches"}><Text fontSize={"18px"}  ml={"4%"} my={"1%"}>Beaches</Text></Link>

           <Link to={"/Mountains"}><Text fontSize={"18px"}  ml={"4%"} my={"1%"}>Mountains</Text></Link>

           <Link to={"/Heritage"}><Text fontSize={"18px"}  ml={"4%"} my={"1%"}>Heritage</Text></Link>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>



          <Link  to="/" className="navbar-logo">
            <Image src={logo} link="/" padding={{base:"22px"}} alt="" className="image" />
            <Text marginLeft="-10%" fontSize={{
              base:"20px",
              lg:"1.8rem"
            }} >TravelWorld</Text>
          </Link>
          
          <ul className="nav-items">
            {navItems.map((item) => {
              if (item.title === "Inspirations") {
                return (
                  <>
                  <Text
                  marginTop={{md:"3%",lg:"2%"}}
                  display={{ base: "none", md: "block" }} 
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
               
                  >
                    <Link  to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </Text>
                  <Text fontSize={"18px"} color={"white"} display={{ base: "block", md: "none",lg:"none" }}>
                  <Link    to={"/signin"}>Sign In</Link>
                   </Text> 
                   </>
                );
              }
              return (
                <Text marginTop={{md:"3%",lg:"2%"}} display={{ base: "none", md: "block" }}  key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
             

                </Text>
              );
            })}
          </ul>
         
        </Flex>


    </Box >
  )
}


