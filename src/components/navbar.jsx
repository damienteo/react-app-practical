import React, { Component } from "react";

const NavBar = props => {
  console.log("navbar rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary">
          There are {props.total} counters
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
