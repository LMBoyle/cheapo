// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Login from "../components/Login"


// Functions ======================================================================================

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> Login </h1>
            <form>
              <Login />
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export =========================================================================================

export default NoMatch;
