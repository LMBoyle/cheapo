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
              <div className="container">
                <Card
                  title="Save Money"
                >
                  Save towards rent, vacation or treating yourself to something nice!
                </Card>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


// Export =========================================================================================

export default Welcome;