// Imports ========================================================================================

import React, { Component } from 'react';

// Components
import { Col, Row, Container } from "../../components/Grid";
import { Card } from "../../components/Card"
import { FormBtn, Input } from "../../components/Form";
import NavTab from "../../components/NavTab";
import { ListGoals, GoalCircle } from "../../components/List";

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
      progressComplete: 0
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

            <div className="tab-pane fade" id="see" role="tabpanel" aria-labelledby="profile-tab">
              {this.state.goals.length ? (
                <ListGoals>
                  {this.state.goals.map(goal => (
                    <GoalCircle 
                      key={goal._id}
                      goal= {goal.goalName}
                      total={goal.totalAmt}
                      weekly={goal.weeklyAmt}
                      strokeWidth="10"
                      sqSize="200"
                      percentage={goal.progressComplete}
                    />
                  ))}
                </ListGoals>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </div>
          </div>

        </NavTab>
      </Container>
    );
  }
}

// Export =========================================================================================

export default Goals;
