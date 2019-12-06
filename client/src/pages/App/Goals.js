// Imports ========================================================================================

import React, { Component } from 'react';

// Components
import { Container } from "../../components/Grid";
import NavTab from "../../components/NavTab";
import { ShowTab, NewTab, SaveTab } from "../../components/Goals"

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
      totalSavedAmt: '',
      weeklySavedAmt: ''
    }
  }

  // When page loads, load the goals
  componentDidMount() {
    this.loadGoals();
  }

  // Request to load goals
  loadGoals = () => {
    API.getGoals()
      .then(res =>
        this.setState({ goals: res.data.goals, goalName: "", weeklyAmt: "", totalAmt: "", totalSavedAmt: "", weeklySavedAmt: "" })
      )
      .catch(err => console.log(err));
  };

  // Request to delete goal
  deleteGoal = id => {
    API.deleteGoal(id)
      .then(res => this.loadGoals())
      .catch(err => console.log(err));
  };

  // When user types into add tab
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // When user types into edit tab
  handleAdd = (e) => {

  }

  // When user clicks submit button on add tab
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
          <div className="tab-pane fade show active" id="see" role="tabpanel" aria-labelledby="see-tab">
            {this.state.goals.length ? (
              <ShowTab
                goals={this.state.goals}
              />
            ) : (
                <h3> No Goals Yet! </h3>
              )}
          </div>

          {/* Tab To Add Goals */}
          <div className="tab-pane fade" id="add" role="tabpanel" aria-labelledby="add-tab">
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
          <div className="tab-pane fade" id="save" role="tabpanel" aria-labelledby="save-tab"> 
            <SaveTab
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
