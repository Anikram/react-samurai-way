import React from 'react'
import Friends from "./Friends";
import {getUserFriends} from "../../redux/friendsReducer";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {compose} from "redux";
import {resetProfile} from "../../redux/profileReducer";



class FriendsContainer extends React.PureComponent {
  componentDidMount() {
    this.props.getUserFriends(this.props.friendsNumber,this.props.pageNumber)
  }

  render() {
    return (
      <Friends
        friends={this.props.friends}
        getUserFriends={this.props.getUserFriends} resetProfile={this.props.resetProfile}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    friends: state.friendsPage.friends,
    friendsNumber: state.friendsPage.friendsNumber,
    friendsPageNumber: state.friendsPage.friendsPageNumber
  }
}

export default compose(
  connect(mapStateToProps,{
  getUserFriends, resetProfile}),
  withRouter
)(FriendsContainer)
