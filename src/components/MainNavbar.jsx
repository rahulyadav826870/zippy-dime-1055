import React from 'react'

import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";
// import navbarBackgroud from "../images/navbarBackgroud.jpg";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from 'react';
// import { Input } from "@chakra-ui/react"

export default function MainNavbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>

<div className="navbar">
          <Link to="/" className="navbar-logo">
            <img src={logo} link="/" alt="" className="image" />
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


    </div>
  )
}


