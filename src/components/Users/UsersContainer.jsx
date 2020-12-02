import React from 'react';
import {connect} from 'react-redux';
import {
  setCurrentPage,
  follow,
  setUsers,
  unFollow,
  setTotalUsersCount,
  toggleIsFetching
} from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  }

  render() {


    return (<>
      <div className={'tile'}>
        {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onPageChanged={this.onPageChanged}
               unFollowUser={this.props.unFollow}
               followUser={this.props.follow}
               isFetching={this.props.isFetching}
        />
      </div>
    </>);
  };
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};


export default connect(mapStateToProps, {
  follow: follow,
  unFollow: unFollow,
  setUsers: setUsers,
  setCurrentPage: setCurrentPage,
  setTotalUsersCount: setTotalUsersCount,
  toggleIsFetching: toggleIsFetching
  })(UsersContainer);
