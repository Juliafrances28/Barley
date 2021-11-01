import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav id="navbar-example2" className="navbar navbar-light bg-light">
      <div>
        <ul className="navbar">
          <li className="nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/Barley"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Barley
            </Link>
          </li>
          <li className="nav">
            <Link
              to="Golden"
              className={
                window.location.pathname === "/Golden"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Golden
            </Link>
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
