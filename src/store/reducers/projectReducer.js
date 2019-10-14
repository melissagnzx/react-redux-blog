const initState = {
  projects: [
    { id: "1", title: "Blog One", content: "hello there" },
    { id: "2", title: "Blog Two", content: "hello there" }
  ]
};
// initState is a default value
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
