// Imports ========================================================================================

import React, { Component } from "react";

// Components
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
import DashboardLoggedIn from "../../components/DashboardLoggedIn";
import DashboardDefault from "../../components/DashboardDefault";

// Functions ======================================================================================
//Use as routing to the two diff dashboards
function Dashboard(props) {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
      return <DashboardLoggedIn 
      user = {props.user.firstName} 
      />
    }else{
      return <DashboardDefault />
    }

  }


// Export =========================================================================================

export default Dashboard;
