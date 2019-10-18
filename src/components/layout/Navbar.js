import React from "react";
import { Link } from "react-router-dom";
import SignedinLink from "./SignedinLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

function Navbar(props) {
  const { auth } = props;
  //render appropriate links if signed in/signed out
  const links = auth.uid ? <SignedinLink /> : <SignedOutLink />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          FirstDraft
        </Link>
        {links}
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(Navbar);
