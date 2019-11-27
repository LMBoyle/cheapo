// Imports ========================================================================================

import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import { Col } from '../Grid';
import './Nav.css';

// Functions ======================================================================================

const Nav = (props) => {
  let greeting;

  if (props.user === null) {
    greeting = (
      <Fragment>
        <div className="float-right">
          <ul className="nav navbar-right">
            <li><Link to="/signup" className="logout"><i className="material-icons">person_add</i> Sign Up </Link></li>
            <li><Link to="/login" className="logout"><i className="material-icons">verified_user</i> Login </Link></li>
          </ul>
        </div>
      </Fragment>
    )
  } else if (props.user.firstName) {
    greeting = (
      <Fragment>
        <div className="row">
          <div className="col-md text-center userName">
            Welcome back, <strong>{props.user.firstName}</strong>
          </div>
          <div className="col-md-3 text-right">
            <Link to="/profile"><i class="material-icons">person</i> User Profile </Link>
            <Link to="/" className="logout" onClick={props.logout}><i class="material-icons">cancel</i> Logout </Link>
          </div>
        </div>
      </Fragment>
    )
  } else if (props.user.username) {
    greeting = (
      <Fragment>
        <div className="row">
          <div className="col-md text-center userName">
            Welcome back, <strong>{props.user.username}</strong>
          </div>
          <div className="col-md-3 text-right">
            <Link to="/profile"><i class="material-icons">person</i> User Profile </Link>
            <Link to="/" className="logout" onClick={props.logout}><i class="material-icons">cancel</i> Logout </Link>
          </div>
        </div>
      </Fragment>
    )
	}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Col size="md-2">
        <Link to="/" className="navbar-brand"><i className="material-icons md-72">local_atm</i> Cheapo </Link>
      </Col>
      <Col size="md">
          {greeting}
      </Col>
    </nav>
  )
};

// Export =========================================================================================

export default Nav;