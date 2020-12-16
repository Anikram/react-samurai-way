import React from 'react';
import {connect} from 'react-redux';
import {
  setCurrentPage,
  fetchUsers, followUser, unfollowUser
} from '../../redux/usersReducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {withConnectedAuthRedirect} from "../../hoc/withConnectedAuthRedirect";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/selectors/usersSelectors";

class UsersContainer extends React.PureComponent {

  componentDidMount() {
    const {currentPage, pageSize} = this.props
    this.props.getUsers(currentPage, pageSize)
  };

  onPageChanged = (pageNumber) => {

    const {pageSize} = this.props;
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, pageSize)
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
               deleteUserFriend={this.props.deleteUserFriend}
        />
      </div>
    </>);
  };
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state)

  };
};

export default compose(
  connect(mapStateToProps, {
    setCurrentPage: setCurrentPage,
    getUsers: fetchUsers,
    followUser: followUser,
    unfollowUser: unfollowUser,
  }),
  withConnectedAuthRedirect
)(UsersContainer);
