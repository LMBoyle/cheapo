

import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Login(props) {
  return (
    <div>
      <label htmlFor="exampleInputPassword1">Username</label> 
      <input type="book" className="form-control" id="inputBook" placeholder="Username" />
      <label htmlFor="exampleInputPassword1">Password</label> 
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      <br></br>
      <button type="button" className="btn btn-info" >Submit</button>
    </div>
  );
}

export default Login