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
              <button key={goal._id} className="dropdown-item goalDropdown" onClick={() => handleSelect(goal._id)}> {goal.goalName} </button>
            ))} 
          </div>
        </div>
      </Col>
      <Col size="md-6">
        {totalSavedAmt ? (
          <form style={{ marginTop: 10 }}>
            <h1 id="selectedGoalTitle"> {selectedGoal} </h1>
            <h2> You have saved ${totalSavedAmt} towards your goal of {totalAmt} </h2>
          
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
        ) : (
          <h2> Select A Goal To Update </h2>
        )}
      </Col>
    </Row>
    )
  }