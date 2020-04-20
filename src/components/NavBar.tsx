import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

class NavBar extends React.Component {
  closeHamburgerBtn() {
    const hamburgerNavbar: HTMLElement = document.getElementById(
      "hamburger-navbar"
    )!;
    hamburgerNavbar.click();
  }

  render() {
    return (
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle id="hamburger-navbar" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              exact
              to="/"
              className="text-black"
            >
              home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              to="/about"
              className="text-black"
            >
              about
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              to="/notebook"
              className="text-black"
            >
              notebook
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              to="/projects"
              className="text-black"
            >
              projects
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              to="/services"
              className="text-black"
            >
              services
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              to="/photos"
              className="text-black"
            >
              photos
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              onClick={() => this.closeHamburgerBtn()}
              to="/music"
              className="text-black"
            >
              music
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
