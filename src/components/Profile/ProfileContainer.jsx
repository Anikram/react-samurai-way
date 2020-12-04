import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {withConnectedAuthRedirect} from "../../hoc/withConnectedAuthRedirect";

//This is class container component for side effects *inner container layer*
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }

    this.props.getUserProfile(userId);
  }

//this is render of presentational component *clear component*
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
};
//Custom HOC - with isAuth and redirect
let ConnectedAuthRedirectComponent = withConnectedAuthRedirect(ProfileContainer)

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

//withRouter HOC
let WithRouterContainerComponent = withRouter(ConnectedAuthRedirectComponent);

//redux HOC connect
export default connect(mapStateToProps, {
  getUserProfile
})(WithRouterContainerComponent);