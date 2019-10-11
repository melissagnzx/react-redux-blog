import React from "react";
import { NavLink } from "react-router-dom";

/* Display information if user is signed in */
export default function SignedinLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          MG
        </NavLink>
      </li>
    </ul>
  );
}
