import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, isFriend, updateUserStatus} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";
import {withConnectedAuthRedirect} from "../../hoc/withConnectedAuthRedirect";
import {compose} from "redux";
import {followUser, unfollowUser} from "../../redux/usersReducer";
import {updateUserFriends} from "../../redux/friendsReducer";
import {getFollowingInProgress} from "../../redux/selectors/usersSelectors";
import {
  getAuthorizedUserProfile,
  getProfileStatus,
  isUserAuthorized,
  selectUserProfile, getIsFriend
} from "../../redux/selectors/profileSelectors";

//This is class container component for side effects *inner container layer*
class ProfileContainer extends React.PureComponent {
  state = {
    statusEditable: true
  }

  statusEditableCheck(userId) {
    if (userId === this.props.authorizedUserId)  {
      this.setState({
        statusEditable: true,
      })
    } else {
      this.setState({
        statusEditable: false,
      })
    }
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        return <Redirect to='/login'/>
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
    this.statusEditableCheck(userId)
    this.props.isFriend(userId)
  }

//this is render of presentational component *clear component*

  render() {
    return (<Profile
      profile={this.props.profile}
      status={this.props.status}
      updateUserStatus={this.props.updateUserStatus}
      statusEditable={this.state.statusEditable}
      followUser={this.props.followUser}
      unfollowUser={this.props.unfollowUser}
      followingInProgress={this.props.followingInProgress}
      profileIsFriend={this.props.profileIsFriend}
      authorizedUserId={this.props.authorizedUserId}
    />)
  }
}

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => {
  return ({
    profile: selectUserProfile(state),
    status: getProfileStatus(state),
    authorizedUserId: getAuthorizedUserProfile(state),
    isAuth: isUserAuthorized(state),
    profileIsFriend: getIsFriend(state),
    followingInProgress: getFollowingInProgress(state),
    friends: state.friendsPage.friends
  });
}

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    isFriend,
    updateUserFriends,
    followUser,
    unfollowUser,
  }),
  withRouter,
  withConnectedAuthRedirect
)(ProfileContainer);