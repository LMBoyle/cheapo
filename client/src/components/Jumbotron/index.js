import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 700, width: "100%", clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron jumbotron-fluid"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
