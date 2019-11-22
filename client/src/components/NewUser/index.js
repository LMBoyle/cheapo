// Imports ========================================================================================

import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import axios from "axios";

// Functions ======================================================================================

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      toDashboard: false
    };
  
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // As user types, update the value where the id = the id of the currently selected text box
  handleChange(e) {
    const { id, value } = e.target
    console.log("id :" + id + " value: " + value)
    this.setState({ [id]: value });
  }
  
  // When user clicks submit, send the user data to the api and re-route back to the homepage
  handleSubmit(e) {
    let name = [this.state.firstName] + " " + [this.state.lastName]
    console.log(name)



    // axios.post("/signup", bookData);
    // this.setState({toDashboard:true})
  }

  render () {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <label htmlFor="firstName"> First Name </label> 
        <input type="firstName" className="form-control" id="firstName" placeholder="John" value={this.state.firstName} onChange={this.handleChange} />
        <label htmlFor="lastName"> Last Name </label> 
        <input type="lastName" className="form-control" id="lastName" placeholder="Doe" value={this.state.lastName} onChange={this.handleChange} />
        <label htmlFor="email"> Email </label> 
        <input type="email" className="form-control" id="email" placeholder="JDoe@email.com" value={this.state.email} onChange={this.handleChange} />
        <label htmlFor="username"> Username </label> 
        <input type="username" className="form-control" id="username" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
        <label htmlFor="password"> Password </label> 
        <input type="password" className="form-control" id="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        <br></br>
        <button type="button" className="btn btn-info" onClick={this.handleSubmit}> Submit </button>
      </div>
    );
  }
}

// Export =========================================================================================

export default NewUser
