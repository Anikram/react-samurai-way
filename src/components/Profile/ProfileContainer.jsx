import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../api/AuthApi";

//This is class container component for side effects *inner container layer*
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    if (!userId) {
      userId = 2;
    }
    getUserProfile(userId).then((response) => {
      this.props.setUserProfile(response.data);
    });

  }

//this is render of presentational component *clear component*
  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
};

//This is react-redux wrapper for store access *outer container layer*
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

let WithRouterContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
  setUserProfile,
})(WithRouterContainerComponent);