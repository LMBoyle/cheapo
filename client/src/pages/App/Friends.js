// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


// Functions ======================================================================================

function Friends() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> Friends </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export =========================================================================================

export default Friends;