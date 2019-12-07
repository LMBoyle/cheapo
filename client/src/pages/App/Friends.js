// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card, CardImg } from "../../components/Card"

// Images
const friends = require("../../assets/img/friends.jpg");

// Functions ======================================================================================

function Friends() {
  return (
    <Container fluid>
      <Card
        cardClass={"cardWrap"}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              {/* <h1> Friends </h1> */}
              <CardImg 
                src = {friends}
                alt = "friendsCast"
              />
            </Jumbotron>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

// Export =========================================================================================

export default Friends;
