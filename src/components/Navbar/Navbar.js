import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link className="navbar-brand" to="/home">
            <div className="d-flex justify-content-center align-items-center">
              <h1>User Information</h1>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center"
            id="navbarNavAltMarkup"
          >
            <div></div>
            <div className="navbar-nav align-items-center">
              <Link className={`nav-link`} aria-current="page" to="/">
                Home
              </Link>
              <Link className={`nav-link`} aria-current="page" to="/blogs/1">
                Blogs
              </Link>
              <Link className={`nav-link`} aria-current="page" to="/blogs/1">
                Some Other info
              </Link>
            </div>
            <div></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
