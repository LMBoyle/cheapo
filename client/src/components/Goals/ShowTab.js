// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row } from "../../components/Grid";
import { Card } from "../../components/Card"
import { FormBtn, Input } from "../../components/Form";
import { ListGoals, GoalCircle } from "../../components/List";


// Functions ======================================================================================

export const ShowTab = props => {
  const { goals } = props
  
  return (
    <>
    {goals.map(goal => (
      <GoalCircle
        key={goal._id}
        goal={goal.goalName}
        total={goal.totalAmt}
        weekly={goal.weeklyAmt}
        strokeWidth="10"
        sqSize="200"
        // percentage={goal.progressComplete}
        percentage={20}
      />
    ))}
    </>
  )
}