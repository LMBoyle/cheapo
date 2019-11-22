// Imports ========================================================================================

import React, { Component } from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

// Functions ======================================================================================

function Dashboard(props) {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> Welcome to Cheapo! </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


// Export =========================================================================================

export default Dashboard;
