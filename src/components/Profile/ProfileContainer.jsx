import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withConnectedAuthRedirect} from "../../hoc/withConnectedAuthRedirect";
import {compose} from "redux";

//This is class container component for side effects *inner container layer*
class ProfileContainer extends React.Component {
  componentDidMount() {
    // let userId = this.props.match.params.userId;

    // if (!userId) {
    //   userId = 2;
    // }

    this.props.getUserProfile(this.props.userId);

    this.props.getUserStatus(this.props.userId);
  }

//this is render of presentational component *clear component*

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status}
               updateUserStatus={this.props.updateUserStatus}/>
    )
  }
};

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId
});

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withConnectedAuthRedirect
)(ProfileContainer);