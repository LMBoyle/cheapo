import React from "react";

export const Card = (props) => (
  <div className="card" style={props.styleCard}>
    <div className="card-body" style={props.styleBody}>
      {props.children}
    </div>
  </div>
);
