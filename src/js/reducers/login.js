import { createAction, handleActions } from "redux-actions";

const defaultState = {
  username:"",
  email:"",
  firstName:"",
  lastName:"",
  role:"",
  organization:"",
  isAuthenticated: false,
  admin:false
};

// ACTIONS

const setUsername = createAction("SET_USERNAME");
const setPassword = createAction("SET_PASSWORD");
const setAuth = createAction("SET_AUTHENTICATION")

const reducer = handleActions(
  {
    [setUsername]: (state, { payload }) => ({ ...state, username: payload }),
    [setAuth]: (state, { payload }) => {
        if (payload === true){
            return { ...state, isAuthenticated:true }; 
        }
        else{
            return { ...state, isAuthenticated:false }; 
        }  
    },
  },
  defaultState
);

const getAuthInfo = (state) => state.login;

export default reducer;
export { setUsername, setPassword, setAuth, getAuthInfo };