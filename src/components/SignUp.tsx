import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
function SignUp() {
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
      .post("https://reqres.in/api/register", obj)
      .then(res => console.log("You have successfully signed up:", res))
      .then(res => alert("Please Check The Chrome Devtools"))
      .then(res => history.push("/"))
      .catch(error => {
        alert("Sorry! Signup failed 😣. Type the Email hint ☺");
      });
    setState({
      email: "",
      password: ""
    });
  };
  return (
    <React.Fragment>
      <h5>Signup </h5>
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
              <label>pistol</label>
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
    </React.Fragment>
  );
}

export default SignUp;
