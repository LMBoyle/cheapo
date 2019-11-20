import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 700, width: "100%", clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron jumbotron-fluid"
    >
      {children}
      <form>
        <label for="exampleInputPassword1">Username</label> 
        <input type="book" className="form-control" id="inputBook" placeholder="Username" />
        <label for="exampleInputPassword1">Password</label> 
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        <br></br>
        <button type="button" className="btn btn-info" >Submit</button>
      </form>
    </div>
  );
}

export default Jumbotron;
