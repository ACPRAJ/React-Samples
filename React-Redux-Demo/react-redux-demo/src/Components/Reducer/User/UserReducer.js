import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
} from "./UserConstants.js";

const initialState = {
  loading: false,
  users: [],
  errorMsg: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return {
        loading: true,
        users: [],
        errorMsg: "",
      };

    case USER_FETCH_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        errorMsg: "",
      };

    case USER_FETCH_FAILURE:
      return {
        loading: false,
        users: [],
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};
