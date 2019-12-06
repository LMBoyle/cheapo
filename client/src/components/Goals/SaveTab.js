// Imports ========================================================================================

import React from "react";

// Components
import { Col, Row } from "../Grid";
import { FormBtn, Input } from "../Form";

// Functions ======================================================================================

export const SaveTab = props => {
  const { goals, selectedGoal, totalAmt, totalSavedAmt, amtToSave, handleChange, handleAdd, handleSelect } = props
  return (
    <Row>
      <Col size="md-6">
        <div className="btn-group dropright">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Goals
          </button>
          <div className="dropdown-menu">
            {goals.map(goal => (
              <button key={goal._id} className="dropdown-item goalDropdown" onClick={() => handleSelect(goal.goalName)}> {goal.goalName} </button>
            ))} 
          </div>
        </div>
      </Col>
      <Col size="md-6">
        <h1> {selectedGoal} </h1>
        <h2> You have saved ${totalSavedAmt} towards your goal of {totalAmt} </h2>
        <form style={{ marginTop: 10 }}>
          <label htmlFor="amtToSave"> Savings To Add: </label>
          <Input
            type="number"
            name="amtToSave"
            value={amtToSave}
            onChange={handleChange}
          />
          <FormBtn
            disabled={!(amtToSave)}
            onClick={handleAdd}
          >
            Add To Goal!
          </FormBtn>
        </form>

      </Col>
    </Row>
  )
}