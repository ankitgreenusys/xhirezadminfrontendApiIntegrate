import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Styles.css";

import Headerlogo from "../../assets/images/headerlogo.png";

const Index = () => {
  return (
    <nav className="navbar navbar-expand-lg header px-4 py-3">
      <div className="container-fluid">
        <div className="">
          <Link className="navbar-brand" to="/">
            <img src={Headerlogo} className="headerlogo" alt="" />
          </Link>
          <Link to="/resdex" className="ms-3 mybtn btn-sm btn-black">Resdex</Link>
        </div>
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
        <div className="navbar-nav navlinks">
          <NavLink to="/listedjobs">
            <i className="fa-solid fa-briefcase"></i> Listed Jobs
          </NavLink>
          <NavLink to="/employee">
            <i className="fa-solid fa-user-tie"></i> Employee
          </NavLink>
          <NavLink to="/employer">
            <i className="fa-solid fa-city"></i> Employer
          </NavLink>
          <NavLink to="/sponsored">
            <i className="fa-solid fa-message"></i> Sponsored
          </NavLink>
        </div>
        <div className="navbar-nav d-flex align-items-center account">
          <div className="acc-notif">
            <i className="fa-solid fa-bell icon d-flex justify-content-around align-items-center"></i>
          </div>
          <div className="nav-item dropdown">
            <span
              className="dropdown-toggle d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa-solid fa-circle-user icon d-flex justify-content-around align-items-center"></i>
              <div className="acc-details">
                <p className="txt-blue my-0 mx-1 name">Admin</p>
                <p className="txt-muted my-0 mx-1 email">admin@gmail.com</p>
              </div>
            </span>
            {/* <ul className="dropdown-menu">
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
                <a className="dropdown-item" href="#">
                  Something
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
