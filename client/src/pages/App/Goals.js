// Imports ========================================================================================

import React, { Component } from 'react';

// Components
// import { Redirect, Link } from 'react-router-dom';
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card"
import { FormBtn, Input } from "../../components/Form";
import NavTab from "../../components/NavTab";

// Others
import API from "../../utils/API"


// Functions ======================================================================================


class Goals extends Component {

  constructor() {
    super();

    this.state = {
      goals: [],
      goalName: '',
      weeklyAmt: '',
      totalAmt: '',
    }
  }

  componentDidMount() {
    this.loadGoals();
  }

  loadGoals = () => {
    API.getGoals()
      .then(res =>
        this.setState({ goals: res.data.goals, goalName: "", weeklyAmt: "", totalAmt: "" })
      )
      .catch(err => console.log(err));
  };

  deleteGoal = id => {
    API.deleteGoal(id)
      .then(res => this.loadGoals())
      .catch(err => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.goalName && this.state.totalAmt && this.state.weeklyAmt) {
      API.saveGoal({
        goalName: this.state.goalName,
        totalAmt: this.state.totalAmt,
        weeklyAmt: this.state.weeklyAmt
      })
        .then(res => this.loadGoals())
        .catch(err => console.log(err));
    }
  }

  render() {

    console.log(this.state);

    return (
      <Container fluid>
        <NavTab>


          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="home-tab">
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
                  <FormBtn
                    disabled={!(this.state.goalName && this.state.totalAmt && this.state.weeklyAmt)}
                    onClick={this.handleSubmit}
                  >
                    Submit Goal!
                </FormBtn>
                </form>
              </Card>
            </Col>
          </Row>
            </div>
            
            <div className="tab-pane fade" id="see" role="tabpanel" aria-labelledby="profile-tab">stuff</div>
          </div>

        </NavTab>
      </Container>
    );
  }
}

// Export =========================================================================================

export default Goals;
