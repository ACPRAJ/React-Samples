import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./Reducer/User/UserActions.js";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  const userId = 0;
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.errorMsg ? (
    <h2>{"Error: " + userData.errorMsg}</h2>
  ) : (
    <div>
      <h1>Users</h1>
      <div>
        {userData && userData.users.length > 0 && (
          <ul>
            {userData.users.map((item) => (
              <li key={item}>
                <h2>{item}</h2>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
    errorMsg: state.errorMsg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
