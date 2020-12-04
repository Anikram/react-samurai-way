import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserProfile, setUserProfile} from "../../redux/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

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
    if (!this.props.isAuth) return <Redirect to={'/login'}/>

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
};

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  getUserProfile
})(WithRouterContainerComponent);