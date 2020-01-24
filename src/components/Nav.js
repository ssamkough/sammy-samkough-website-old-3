import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <ul>
        <Link to="/">
          <li>home | </li>
        </Link>
        <Link to="/about">
          <li>about | </li>
        </Link>
        <Link to="/projects">
          <li>projects | </li>
        </Link>
        <Link to="/services">
          <li>services | </li>
        </Link>
        <Link to="/notebook">
          <li>notebook | </li>
        </Link>
        <Link to="/Gallery">
          <li>gallery</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
