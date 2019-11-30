// Imports ========================================================================================

import React, { Component } from 'react';

// Components
import { Redirect, Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { CardHeader, CardImg, Card } from "../../components/Card"
import { FormBtn, Input } from "../../components/Form";


// Functions ======================================================================================


class Goals extends Component {

  constructor() {
    super();

    this.state = {
      goalName: '',
      weeklyAmt: '',
      totalAmt: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({
      redirectTo: '/'
    });
  }


  render() {
  
    console.log(this.state.goalName);

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Card title="Your Personal Goals: ">
              <form style={{ marginTop: 10 }}>
                <label htmlFor="goalName"> Goal Name: </label>
                <Input
                  type="text"
                  name="goalName"
                  value={this.state.goalName}
                  onChange={this.handleChange}
                />
                <label htmlFor="totalAmt"> Total Amount: </label>
                <Input
                  type="text"
                  name="totalAmt"
                  value={this.state.totalAmt}
                  onChange={this.handleChange}
                />
                <label htmlFor="weeklyAmt"> Weekly Amount: </label>
                <Input
                  type="text"
                  name="weeklyAmt"
                  value={this.state.weeklyAmt}
                  onChange={this.handleChange}
                />
                <FormBtn onClick={this.handleSubmit}> Submit Goal!</FormBtn>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

// Export =========================================================================================

export default Goals;
