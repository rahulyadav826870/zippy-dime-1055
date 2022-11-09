import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
import navbarBackgroud from "../images/navbarBackgroud.jpg";

import { Input } from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'


const headingStyle = {
  color: "white",
  margin: "48px 48px 20px 48px"
}

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div >
      {/* <img src={navbarBackgroud} alt="" /> */}

      <div className="mainNav">


        <div className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="" className="image" />
            <span style={{
              marginLeft: "-22px",
              fontSize: "2.5rem"
            }}>TravelWorld</span>
          </Link>
          <ul className="nav-items">
            {navItems.map((item) => {
              if (item.title === "Inspirations") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {dropdown && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
          <Button />
        </div>
        <div>

          <Heading style={headingStyle}>India's Largest Community of Travellers</Heading>
        </div>
        <Input placeholder='Basic usage' background='white' />
      </div>
    </div>
  );
}

export default Navbar;
