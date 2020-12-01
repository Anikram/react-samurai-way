import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unFollowAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {dispatch(followAC(userId))},
    unFollowUser: (userId) => {dispatch(unFollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;