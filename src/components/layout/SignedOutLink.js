import React from "react";
import { NavLink } from "react-router-dom";

/* Display information if user is signed out */
export default function SignedOutLink() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Login</NavLink>
      </li>
    </ul>
  );
}
