import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import Users from "./components/Users";
import Update from "./components/Update";
import Nav from "./components/Nav";
import SignUp from "./components/SignUp";
import AddUser from "./components/AddUser";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/adduser" component={AddUser} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/api/users/:id" component={Update} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
