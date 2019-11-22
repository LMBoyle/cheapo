// Imports ========================================================================================

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

// Components
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';

// Functions ======================================================================================

class LoginForm extends Component {
  
  constructor() {
    super();
    
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		};
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/'
		});
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<Container>
          <Row>
            <Col size="md-3"></Col>
            <Col size="md-6">
              <Card title="Login to React Reading List">
                <form style={{marginTop: 10}}>
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
                  <Link to="/signup"> Register </Link>
                  <FormBtn onClick={this.handleSubmit}> Login </FormBtn>
                </form>
              </Card>
            </Col>
            <Col size="md-3"></Col>
          </Row>
				</Container>
			)
		}
	}
}

// Export =========================================================================================

export default LoginForm;