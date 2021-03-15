import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{ backgroundColor: "rgba(244,249,249)" }}
      className="navbar navbar-light navbar-expand-lg  "
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <div className="d-flex">
            <img className="nav-img" src="./images/tominejo.png" />
            <p style={{ color:"black" }} className="pt-3"><b>TOMI</b></p>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li style={{ textDecoration:"none" }} className="nav-item">
              <NavLink to="/home">
              <a className="nav-link mx-3 " href="#">
                HOME
              </a>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                APE DICE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                WHITEPAPER
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-3" href="#">
                JUST SWAP
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                AUDITS
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <NavLink to="###">
              <a>
              <img
                className="mx-2"
                src="https://apetron.com/_nuxt/3e5378bfd937308591b5cc281156826d.svg"
              />
              </a>
            </NavLink>
            <NavLink to="###">
              <a>
              <img src="https://apetron.com/_nuxt/f1a23ee63dadc88fd04b3a1d62361e84.svg" />
              </a>
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
