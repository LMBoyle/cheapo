// Imports ========================================================================================

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Goals from "./pages/Goals";
import Friends from "./pages/Friends";
import NoMatch from "./pages/NoMatch";

// Components
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"

// Functions ======================================================================================

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper >
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/friends" component={Friends} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

// Export =========================================================================================

export default App;
