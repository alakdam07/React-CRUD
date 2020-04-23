import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
function SignIn() {
  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    const obj = {
      email: state.email,
      password: state.password
    };
    axios
      .post("https://reqres.in/api/login", obj)
      .then(res => console.log("You have successfully signed in:", res))
      .then(res => alert("Please Check The Chrome Devtools"))
      .then(res => history.push("/users"))
      .catch(error => {
        alert("Login failed");
      });
    setState({
      email: "",
      password: ""
    });
  };
  return (
    <React.Fragment>
      <h5>Login</h5>
      <div className="row center-align formbody">
        <form className="col s12" onSubmit={submitHandler}>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="email"
                type="email"
                onChange={handleChange}
                value={state.email}
              />
              <label>eve.holt@reqres.in</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="password"
                type="password"
                onChange={handleChange}
                value={state.password}
              />
              <label>cityslicka</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="row center-align formbody">
        Don't have an account? <a href="/signup">Signup</a>
      </div>
    </React.Fragment>
  );
}

export default SignIn;
