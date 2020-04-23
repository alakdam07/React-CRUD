import React, { useState, useEffect } from "react";
import axios from "axios";

const Update = props => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: ""
  });

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/" + props.match.params.id)
      .then(response => {
        setState({
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          email: response.data.data.email
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }, [props.match.params.id]);

  const onChangeFirstName = e => {
    const val = e.target.value;
    setState(prevState => ({
      ...prevState,
      first_name: val
    }));
  };

  const onChangeLastName = e => {
    const val = e.target.value;
    setState(prevState => ({
      ...prevState,
      last_name: val
    }));
  };
  const onChangeEmail = e => {
    const val = e.target.value;
    setState(prevState => ({
      ...prevState,
      email: val
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    setLoading(true);
    const obj = {
      first_name: state.first_name,
      last_name: state.last_name,
      email: state.email
    };
    axios
      .patch("https://reqres.in/api/users/" + props.match.params.id, obj)
      .then(res => console.log("User's data successfully updated", res.data));
    setLoading(false);
    props.history.push("/users");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name: </label>
          <input
            type="text"
            className="form-control"
            value={state.first_name}
            onChange={onChangeFirstName}
            id="first_name"
          />
        </div>

        <div className="form-group">
          <label>Last Name: </label>
          <input
            type="text"
            className="form-control"
            value={state.last_name}
            onChange={onChangeLastName}
            id="last_name"
          />
        </div>

        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            className="form-control"
            value={state.email}
            onChange={onChangeEmail}
            id="email"
          />
        </div>
        <div className="form-group">
          <button
            className="btn waves-effect blue lighten-1"
            type="submit"
            name="action"
            disabled={loading}
          >
            {loading ? "loading..." : "save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
