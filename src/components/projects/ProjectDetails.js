import React from "react";
/*React router attaches props inside component which contain details about router such as: 
 - History
 - Location
 - Match (id)
 */
export default function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container section project-detai">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos quas minima
            similique recusandae fugiat suscipit dicta deserunt dolores distinctio facere
            voluptates ea inventore, cupiditate excepturi odio aliquid mollitia soluta qui.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by....</div>
          <div>date</div>
        </div>
      </div>
    </div>
  );
}
