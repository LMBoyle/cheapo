import React from "react";

export const Input = props => (
  <div className="input-group">
    { props.prepend ? (
      <>
        <div class="input-group-prepend">
          <div class="input-group-text"> $ </div>
        </div>
        <input className="form-control" {...props} />
      </>
    ) : (
      <div className="input-group">
        <input className="form-control" {...props} />
      </div>
    )}
  </div>
);
