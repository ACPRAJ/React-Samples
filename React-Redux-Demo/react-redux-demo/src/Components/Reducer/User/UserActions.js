import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./UserConstants";
import axios from "axios";

export const actionRequest = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

export const actionSuccess = (users) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
};

export const actionFailure = (errorMsg) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: errorMsg,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(actionRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((item) => item.username);
        dispatch(actionSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(actionFailure(errorMsg));
      });
  };
};

//export * from "./UserActions.js";
