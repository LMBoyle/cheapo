// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import LoginForm from "../components/LoginForm"


// Functions ======================================================================================

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1> Login </h1>
            <form>
              <LoginForm />
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

// Export =========================================================================================

export default Login;
