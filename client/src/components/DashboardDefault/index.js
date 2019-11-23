import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


function DashboardDefault(props) {
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

export default DashboardDefault;
