// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card } from "../../components/Card";


// Functions ======================================================================================

function Profile() {
  return (
    <Container fluid>
      <Card
        cardClass={"cardWrap"}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> User Profile </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

// Export =========================================================================================

export default Profile;
