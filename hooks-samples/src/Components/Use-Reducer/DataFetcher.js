import React, { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payLoad,
        error: ""
      };

    case "Fetch_Error":
      return {
        loading: false,
        post: action.payLoad,
        error: action.error
      };

    default:
      return state;
  }
};

function DataFetcher() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(`Calling the API using Axios`);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", payLoad: response.data });
      })
      .catch(exception => {
        dispatch({ type: "FETCH_ERROR", error: "Error while fetching data" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetcher;
