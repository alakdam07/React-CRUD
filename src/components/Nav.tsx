import React from "react";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
      <div className="nav-wrapper purple darken-1">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/" className="text">
                Home
              </NavLink>
            </li>

            <li className="right">
              <NavLink to="/adduser" className="text right-align">
                Create user
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
