import { Navbar } from "flowbite-react";
import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div className="header pb-6">
      {/* This is Flowbite components */}
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            src="https://img.freepik.com/free-vector/education-business-logo-template-branding-design-vector-education-center-text_53876-151217.jpg?w=740&t=st=1665330345~exp=1665330945~hmac=2a85f2e7ea9d8dd27a2d6e680c5f281cf8767750943989bb55091f7f4a3158d6"
            className="mr-3 h-6 sm:h-9"
            alt="School logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            My-School
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/academics"
          >
            Academics
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
      {/* This is Flowbite components */}
    </div>
  );
};

export default Header;
