const initState = {
  authError: null
};
// initState is a default value
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("fail");

      return {
        ...state,
        authError: "Login Failed"
      };
    case "LOGIN_SUCCESS":
      console.log("Success");
      return {
        ...state,
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;
