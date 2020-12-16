import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";
import {withConnectedAuthRedirect} from "../../hoc/withConnectedAuthRedirect";
import {compose} from "redux";
import {followUser, unfollowUser} from "../../redux/usersReducer";
import {updateUserFriends} from "../../redux/friendsReducer";

//This is class container component for side effects *inner container layer*
class ProfileContainer extends React.PureComponent {
  state = {
    statusEditable: true,
    friendData: {}
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

  getFriend = () => {
    if (this.props.profile && this.props.friends) {
      return this.props.friends.filter(friend => friend.id === this.props.profile.userId)
    }
    return undefined;
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
    this.statusEditableCheck()
    this.props.updateUserFriends()
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
                     friendData={this.getFriend()}

    />)
  }
}

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    friends: state.friendsPage.friends,
    followingInProgress: state.usersPage.followingInProgress
  });
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, updateUserFriends, followUser, unfollowUser,}),
  withRouter,
  withConnectedAuthRedirect
)(ProfileContainer);