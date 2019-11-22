// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NewUser from "../components/NewUser"


// Functions ======================================================================================

function SignUp() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> Hello! </h1>
            <p> Just fill out a few things and we'll get you set up </p>
            <form>
              <NewUser />
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export =========================================================================================

export default SignUp;
