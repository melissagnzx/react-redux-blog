import React from "react";
import { Link } from "react-router-dom";
import SignedinLink from "./SignedinLink";
import SignedOutLink from "./SignedOutLink";
import { connect } from "react-redux";

function Navbar(props) {
  const { auth, profile } = props;
  //render appropriate links if signed in/signed out
  const links = auth.uid ? <SignedinLink profile={profile} /> : <SignedOutLink />;
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {links}
      </div>
    </nav>
  );
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps)(Navbar);
