// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import DashboardLoggedIn from "../../components/DashboardLoggedIn"
import { Card } from "../../components/Card";

// Functions ======================================================================================

function Dashboard() {
  return (
    <Container fluid>
      <Card
        cardClass={"cardWrap"}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1> Welcome to Cheapo! </h1>
              <DashboardLoggedIn />
            </Jumbotron>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}


// Export =========================================================================================

export default Dashboard;