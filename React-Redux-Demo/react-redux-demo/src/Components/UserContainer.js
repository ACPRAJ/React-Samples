import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./Reducer/User/UserActions.js";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(`${userData.users}`);
  return userData.loading ? (
    <h2>Loading...</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <h1>Users</h1>
      <div>
        {userData && userData.users.length > 0
          ? userData.users.map((item) => <h2>{item}</h2>)
          : "Error: " + userData.errorMsg}
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
