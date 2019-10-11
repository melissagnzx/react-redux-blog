import React, { Component } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          {/* Project List */}
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          {/* Notifications */}
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}
//Map state of store to the props of dashboard component
/*return obj that represents properties are attached to 
dashboard props so we can access them inside dashboard */
const mapStateToProps = state => {
  return {
    projects: state.project.projects
  };
};
//Connect dashboard with Redux store
/* Need to pass mapStateToProps so connect knows what to connect to and what
data we need to get from store */
export default connect(mapStateToProps)(Dashboard);
