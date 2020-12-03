import React from 'react';
import {connect} from 'react-redux';
import {
  setCurrentPage,
  follow,
  unFollow,
  toggleFollowingInProgress,
  getUsers, followUser, unfollowUser
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize)
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
               followingInProgress={this.props.followingInProgress}
               followUser={this.props.followUser}
               unfollowUser={this.props.unfollowUser}
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
    followingInProgress: state.usersPage.followingInProgress,

  };
};


export default connect(mapStateToProps, {
  setCurrentPage: setCurrentPage,
  getUsers: getUsers,
  followUser: followUser,
  unfollowUser: unfollowUser,
})(UsersContainer);
