// Imports ========================================================================================

import React, { Component } from "react";

// Components
import { Col, Row } from "../../components/Grid";
import { Card } from "../../components/Card"
import { ListGoals, GoalCircle } from "../../components/List";


// Functions ======================================================================================

class ShowTab extends Component {
  constructor() {
    super();
  }

  calcPercent(goal, saved) {
    console.log(goal, saved)
    return((goal/100)*saved)
  }
  
  render() {
    return (
      <>
      {this.props.goals.map(goal => (
        <GoalCircle
          key={goal._id}
          goal={goal.goalName}
          total={goal.totalAmt}
          weekly={goal.weeklyAmt}
          strokeWidth="10"
          sqSize="200"
          percentage={this.calcPercent(goal.totalAmt, goal.totalSavedAmt)}
          // percentage={20}
        />
      ))}
      </>
    )
  }
}

// Export =========================================================================================

export {ShowTab};
