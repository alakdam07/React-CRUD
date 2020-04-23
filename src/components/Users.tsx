import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Users() {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetchingData();
  }, []);

  const Reminder = () => {
    alert("Please Check Chrome Devtools");
  };

  const removeData = async id => {
    console.log("ID", id);
    try {
      const response = await axios.delete(`https://reqres.in/api/users/${id}`);
      alert("Please Check The Chrome Devtools");
      console.log("User succesfully deleted", response);
      fetchingData();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchingData = () => {
    axios
      .get("https://reqres.in/api/users")
      .then(response => {
        setState(response.data.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div className="col s12 m7">
      <h2 className="header">Users</h2>
      {state.map(userlist => {
        return (
          <div className="card horizontal" key={userlist.id}>
            <div className="card-image medium">
              <img src={userlist.avatar} alt="images" />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  Name: {userlist.first_name} {userlist.last_name}
                </p>
                <p>Email: {userlist.email}</p>
                <p>ID: {userlist.id}</p>
              </div>
              <div className="card-action">
                <button
                  className="btn delete red"
                  onClick={() => removeData(userlist.id)}
                >
                  Delete
                </button>

                <NavLink
                  onClick={Reminder}
                  exact
                  to={`/api/users/${userlist.id}`}
                  className="btn edit"
                >
                  Edit
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
