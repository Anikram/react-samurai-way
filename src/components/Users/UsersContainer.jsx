import React from "react";

import {connect} from "react-redux";
import {setCurrentPageAC, followAC, setUsersAC, unFollowAC, setTotalUsersCountAC} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  };

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then((response) => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {


    return (
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             users={this.props.users}
             onPageChanged={this.onPageChanged}
             unFollowUser={this.props.unFollowUser}
             followUser={this.props.followUser}/>);
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);
