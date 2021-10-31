import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div>
        <ul className="navbar">
          <li classname="nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/Barley"
                  ? "nav-link active"
                  : "nav-link"
              }
            ></Link>
          </li>

          <li classname="nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            ></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
