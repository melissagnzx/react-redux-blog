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
    case "SIGNOUT_SUCCESS":
      console.log("logged out");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
