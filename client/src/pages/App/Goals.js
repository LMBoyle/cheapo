// Imports ========================================================================================

import React, { Component } from 'react';

// Components
import { Container } from "../../components/Grid";
import { Card } from "../../components/Card"
import NavTab from "../../components/NavTab";
import { ShowTab, NewTab, SaveTab } from "../../components/Goals"

// Others
import API from "../../utils/API"

let sum;

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
      weeklySavedAmt: '',
      selectedGoal: '',
      selectedId: '',
      amtToSave: ''
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
        this.setState({ goals: res.data.goals, goalName: "", weeklyAmt: "", totalAmt: "", totalSavedAmt: "", weeklySavedAmt: "", selectedGoal: '', selectedId: '', amtToSave: '' })
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

  // When user clicks on dropdown
  handleSelect = id => {
    // Find the goal selected
    // console.log(id)
    // Get the data and send it to state
    API.getGoal(id)
      .then(res => 
        this.setState({ selectedGoal: res.data.goals.goalName, selectedId: res.data.goals._id, totalSavedAmt: res.data.goals.totalSavedAmt, totalAmt: res.data.goals.totalAmt}),
      )
      .catch(err => console.log(err));
  }

  // When user types into edit tab
  handleAdd = (e) => {
    e.preventDefault();
    // Add existing amount to amount to add
    sum = Number(this.state.totalSavedAmt) + Number(this.state.amtToSave)
    // Send API to update
    API.updateGoal(this.state.selectedId, {
      totalSavedAmt: sum
    })
      .then(res => this.loadGoals())
      .catch(err => console.log(err));
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
      <Container>
        <Card
          styleCard={{"box-shadow":"0px 0px 10px -3px #577720", marginBottom: 20}}
          styleBody={{padding: "0 0 50px 0"}}
        >
          {/* Tabs for Goal Page */}
          <NavTab>
            <Container>
              {/* Tab Content */}
              <div className="tab-content mt-5" id="myTabContent">

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
                <div className="tab-pane fade" id="save" role="tabpanel" aria-labelledby="save-tab"> 
                  <SaveTab
                    goals={this.state.goals}
                    selectedGoal={this.state.selectedGoal}
                    totalAmt={this.state.totalAmt}
                    totalSavedAmt={this.state.totalSavedAmt}
                    amtToSave={this.state.amtToSave}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSelect={this.handleSelect}
                  />
                </div>
              
              </div>
            </Container>
          </NavTab>
        </Card>
      </Container>
    );
  }
}

// Export =========================================================================================

export default Goals;
