import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter, Redirect} from "react-router-dom";
import {withConnectedAuthRedirect} from "../../hoc/withConnectedAuthRedirect";
import {compose} from "redux";

//This is class container component for side effects *inner container layer*
class ProfileContainer extends React.Component {
  state = {
    statusEditable: true
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  statusEditableCheck() {
    if (this.props.match.params.userId) {
      this.state.statusEditable = false
    } else {
      this.state.statusEditable = true
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
    this.statusEditableCheck()
  }

//this is render of presentational component *clear component*

  render() {
    return (<Profile {...this.props} profile={this.props.profile} status={this.props.status}
               updateUserStatus={this.props.updateUserStatus} statusEditable={this.state.statusEditable}/>)
  }
}

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => {
  return ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth

  });
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  // withConnectedAuthRedirect
)(ProfileContainer);