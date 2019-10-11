export const createProject = project => {
  // halting the dispatch to retrieve data from db
  return (dispatch, getState) => {
    //make a async call to db
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
