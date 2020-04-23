import React, { useState } from "react";
import axios from "axios";

import { useHistory } from "react-router-dom";
function AddUser() {
  const history = useHistory();
  const [state, setState] = useState({
    name: "",
    job: ""
  });

  const handleChange = e => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    const obj = {
      name: state.name,
      job: state.job
    };
    axios
      .post("https://reqres.in/api/users", obj)
      .then(res => console.log("New user successfully created", res))
      .then(res => alert("Please Check The Chrome Devtools"))
      .then(res => history.push("/users"))
      .catch(error => {
        alert("Login failed");
      });
    setState({
      name: "",
      job: ""
    });
  };
  return (
    <React.Fragment>
      <h5>Create user</h5>
      <div className="row center-align formbody">
        <form className="col s12" onSubmit={submitHandler}>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="name"
                type="text"
                onChange={handleChange}
                value={state.name}
              />
              <label>Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                id="job"
                type="text"
                onChange={handleChange}
                value={state.job}
              />
              <label>Job</label>
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

export default AddUser;
