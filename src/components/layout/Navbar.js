import React from "react";
import { Link } from "react-router-dom";
import SignedinLink from "./SignedinLink";
import SignedOutLink from "./SignedOutLink";

export default function Navbar() {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          FirstDraft
        </Link>
        <SignedinLink />
        <SignedOutLink />
      </div>
    </nav>
  );
}
