// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card } from "../../components/Card"

// Functions ======================================================================================

function Welcome(props) {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> Welcome to Cheapo! </h1>
              <p> We strive to help you help your friends save money! </p>
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col size="md-6">
              <Card
                title="Save Money"
              >
                Save towards rent, vacation or treating yourself to something nice!
              </Card>
            </Col>
          </Row>
          <Row>
            <Col size="md-6"></Col>
            <Col size="md-6">
              <Card
                title="Connect With Friends"
              >
                See how close friends are to meeting their goals and cheer them on!
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

// Export =========================================================================================

export default Welcome;