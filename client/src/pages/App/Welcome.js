// Imports ========================================================================================

import React from "react";
import "./Pages.css"

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { CardHeader, CardImg, Card } from "../../components/Card"

// Functions ======================================================================================

function Welcome() {
  return (
    <div className="container my-0">
      <Card
        styleCard={{"box-shadow":"0px 0px 10px -3px #577720", marginBottom: 20}}
        styleBody={{padding: "0 0 50px 0"}}
      >
        <Row>
          <Col size="md-12">
            <Jumbotron
              style={{color: "#650D1B"}}
            >
              <h1> Welcome to Cheapo! </h1>
              <p> We strive to help you help your friends save money! </p>
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col size="md-6">
              <CardImg
                src="/assets/img/savingJars.jpg"
                alt="Saving Jars"
              />
            </Col>
            <Col size="md-6">
              <CardHeader
                title="Save Money"
                styleHeader={{backgroundColor: "#BF7E04"}}
                styleCard={{textAlign: "center", top: "3rem"}}
              >
                Save towards rent, vacation or treating yourself to something nice!
              </CardHeader>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
              <CardHeader
                title="Connect With Friends"
                styleHeader={{backgroundColor: "#BF7E04"}}
                styleCard={{textAlign: "center", top: "7rem"}}
              >
                See how close friends are to meeting their goals and cheer them on!
              </CardHeader>
            </Col>
            <Col size="md-6">
              <CardImg
                src="/assets/img/friendsMoney.jpg"
                alt="Saving Jars"
              />
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

// Export =========================================================================================

export default Welcome;