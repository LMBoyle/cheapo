// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


// Functions ======================================================================================

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> Welcome, please sign in!</h1>
            <a href="/login"><button> Login </button></a>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export =========================================================================================

export default NoMatch;
