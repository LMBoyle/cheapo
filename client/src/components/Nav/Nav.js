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
        <ul className="nav navbar-right">
          <li><Link to="/signup" className="logout"><i className="material-icons">person_add</i> Sign Up </Link></li>
          <li><Link to="/login" className="logout"><i className="material-icons">verified_user</i> Login </Link></li>
        </ul>
      </Fragment>
    )
	} else if (props.user.firstName) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.firstName}</strong>
        <Link to ="/profile"> <strong> User Profile </strong></Link>
        <Link to="/" className="logout" onClick={props.logout}> Logout </Link>
			</Fragment>
		)
	} else if (props.user.username) {
		greeting = (
			<Fragment>
				Welcome back, <strong>{props.user.username} </strong>
        <Link to ="/profile"> <strong> User Profile </strong></Link>
        <Link to="/" className="logout" onClick={props.logout}> Logout </Link>
			</Fragment>
		)
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Col size="md-2">
        <Link to="/" className="navbar-brand"><i className="material-icons md-72">local_atm</i> Cheapo </Link>
      </Col>
      <Col size="md-5"></Col>
      <Col size="md-3">
        <div className="float-right">
          {greeting}
        </div>
      </Col>
    </nav>
  )
};

// Export =========================================================================================

export default Nav;

{/* <ul className="nav navbar-right">
<li><a href="/signup"><i className="material-icons">person_add</i> Sign Up </a></li>
<li><a href="/login"><i className="material-icons">verified_user</i> Login </a></li>
</ul> */}