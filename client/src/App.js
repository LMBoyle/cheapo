// Imports ========================================================================================

import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

// Pages
import LoginForm from "./pages/Auth/LoginForm"
import SignupForm from  "./pages/Auth/SignupForm"
import Dashboard from "./pages/App/Dashboard";
import Goals from "./pages/App/Goals";
import Friends from "./pages/App/Friends";
import NoMatch from "./pages/NoMatch/NoMatch";

// Components
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"

// Other
import AUTH from "./utils/AUTH"

// Functions ======================================================================================

class App extends Component {

  constructor() {
    super();
    
		this.state = {
			loggedIn: false,
			user: null
    };
  }

  componentDidMount() {
		AUTH.getUser().then(response => {
			// console.log(response.data);
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
	}

  logout = (event) => {
    event.preventDefault();
    
		AUTH.logout().then(response => {
			// console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
			}
		});
  }
  
  login = (username, password) => {
		AUTH.login(username, password).then(response => {
      // console.log(response);
      if (response.status === 200) {
        // update the state
        this.setState({
          loggedIn: true,
          user: response.data.user
        });
      }
    });
	}

  render() {
    return (
      <div class="App">
        { this.state.loggedIn && (
          <div>
            <Nav user={this.state.user} logout={this.logout}/>
            <div className="main-view">
              <Switch>
                <Route exact path="/" component={() => <Dashboard user={this.state.user}/>} />
                <Route exact path="/dashboard" component={() => <Dashboard user={this.state.user}/>} />
                <Route exact path="/goals" component={Goals} />
                <Route exact path="/friends" component={Friends} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        )}
        { !this.state.loggedIn && (
          <div className="auth-wrapper" style={{paddingTop:40}}>
            <Route exact path="/" component={() => <LoginForm login={this.login}/>} />
            <Route exact path="/signup" component={SignupForm} />
            <Route exact path="/login" component={() => <LoginForm user={this.login}/>} />
          </div>
        )}
      </div>
    );
  };
};

// Export =========================================================================================

export default App;
