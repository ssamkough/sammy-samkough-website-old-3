import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} exact to="/" className="text-black">
            home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" className="text-black">
            about
          </Nav.Link>
          <Nav.Link as={NavLink} to="/notebook" className="text-black">
            notebook
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects" className="text-black">
            projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services" className="text-black">
            services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/photos" className="text-black">
            photos
          </Nav.Link>
          <Nav.Link as={NavLink} to="/music" className="text-black">
            music
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
