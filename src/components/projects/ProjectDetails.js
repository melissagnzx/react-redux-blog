import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
/*React router attaches props inside component which contain details about router such as: 
 - History
 - Location
 - Match (id)
 */
function ProjectDetails(props) {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-detai">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> Project Title - {project.id}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>date</div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container center">
      <p>Loading Project...</p>
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
