// Imports ========================================================================================

import React, { Component } from 'react';

// Components
import { Container } from "../../components/Grid";
import NavTab from "../../components/NavTab";
import { NewTab, ShowTab, EditTab } from "../../components/Goals"
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

          {/* Tab To See Goals */}
          <div className="tab-pane fade" id="see" role="tabpanel" aria-labelledby="see-tab">
            {this.state.goals.length ? (
              <ShowTab
                goals={this.state.goals}
              />
            ) : (
                <h3> No Goals Yet! </h3>
              )}
          </div>

          {/* Tab To Add Goals */}
          <div className="tab-pane fade show active" id="add" role="tabpanel" aria-labelledby="add-tab">
            <NewTab
              goalName={this.state.goalName}
              totalAmt={this.state.totalAmt}
              weeklyAmt={this.state.weeklyAmt}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>

          {/* Tab To Add to Goal or Edit */}
          {/* 
          <div className="tab-pane fade" id="edit" role="tabpanel" aria-labelledby="edit-tab"> 
            <EditTab
              goals={this.state.goals}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
          */}
        
        </div>
        </NavTab>
      </Container>
    );
  }
}

// Export =========================================================================================

export default Goals;
