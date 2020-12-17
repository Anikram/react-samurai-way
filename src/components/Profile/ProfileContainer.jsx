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
    statusEditable: true,
    currentUser: false
  }

  statusEditableCheck() {
    if (this.props.match.params.userId) {
      this.setState({
        statusEditable: false
      })
    } else {
      this.setState({
        statusEditable: true
      })
    }
  }

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        return <Redirect to='/login'/>
      } else {
        this.setState({currentUser: true})
      }
    }

    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
    this.statusEditableCheck()
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
      isFriend={this.props.profileIsFriend}
      currentUser={this.state.currentUser}

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
    followingInProgress: getFollowingInProgress(state)
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