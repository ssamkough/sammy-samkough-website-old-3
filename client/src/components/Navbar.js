import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from "../../src/images/meta-logo.png";

const Navbar = props => {
  return (
    <nav className="nav-wrapper z-depth-0 transparent">
      <div className="container">
        <img src={logo} alt="Logo" />
        <ul
          className="right"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <li>
            <NavLink to="/">Meta</NavLink>
          </li>
          <li>
            <NavLink to="/work">Work</NavLink>
          </li>
          <li>
            <NavLink to="/hobbies">Hobbies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
