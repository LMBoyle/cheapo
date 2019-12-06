// Imports ========================================================================================

import React from "react";

// Functions ======================================================================================

function NavTab(props) {
  return (
    <div>
      <br></br>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" role="tab" href="#see">See your goals </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" tole="tab" href="#add">Add new goal </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-toggle="tab" role="tab" href="#edit">Add to your goals </a>
        </li>
      </ul>

      {props.children}

    </div>
  )
}

// Export =========================================================================================

export default NavTab;
