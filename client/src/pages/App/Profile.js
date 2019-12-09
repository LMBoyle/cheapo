// Imports ========================================================================================

import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';

// Components
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { Card } from "../../components/Card";
import { FormBtn, Input } from "../../components/Form";

// Other
import AUTH from '../../utils/AUTH';

// Functions ======================================================================================

class Profile extends Component {

  constructor(){
    super();

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      redirectTo: null
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    // TODO - validate!
    AUTH.updateUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      // console.log(response);
      if (!response.data.errmsg) {
        this.setState({
          redirectTo: '/'
        });
      } else {
        console.log('duplicate');
      }
    });
  }



render(){


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
      <Row>
        <Col size="md-12">

          <Jumbotron>
            <h1> Update User Profile! </h1>
            <Card title="user profile">
              <form style={{ marginTop: 10 }}>
                <label htmlFor="firstname"> First Name: </label>
                <Input
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
                <label htmlFor="lastname"> Last Name: </label>
                <Input
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
                <label htmlFor="username"> Username: </label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <label htmlFor="password"> Password: </label>
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.username && this.state.password)}
                  onClick={this.handleSubmit}
                >
                  Submit Changes!
            </FormBtn>
            </form>
            </Card>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
}
// Export =========================================================================================

export default Profile;
