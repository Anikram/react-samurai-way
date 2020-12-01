import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {setCurrentPageAC, followAC, setUsersAC, unFollowAC, setTotalUsersCountAC} from "../../redux/usersReducer";

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => {dispatch(followAC(userId))},
    unFollowUser: (userId) => {dispatch(unFollowAC(userId))},
    setUsers: (users) => {dispatch(setUsersAC(users))},
    changePage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
    setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCountAC(totalCount))},
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;