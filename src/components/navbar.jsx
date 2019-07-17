import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        React 2.0
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={`/app/movieApp`}>
              Movie App <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/customer">
              Customer
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/employee">
              Employee
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/posts">
              Posts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
