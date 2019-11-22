// Imports ========================================================================================

import React from "react";
import "./style.css"

// Functions ======================================================================================

function Nav(props) {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#"><i className="material-icons md-72">local_atm</i> Cheapo </a>
        </div>
        
        <ul className="nav navbar-right">
          <li><a href="/signup"><i className="material-icons">person_add</i> Sign Up </a></li>
          <li><a href="/login"><i className="material-icons">verified_user</i> Login </a></li>
        </ul>
      </div>
    </nav>
  );
}

// Export =========================================================================================

export default Nav;
