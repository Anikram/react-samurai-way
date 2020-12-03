import React from 'react'
import Friends from "./Friends";
import {getUserFriends} from "../../redux/friendsReducer";
import {connect} from "react-redux";



class FriendsContainer extends React.Component {
  componentDidMount() {
    this.props.getUserFriends(this.props.friendsNumber,this.props.pageNumber)
  }

  render() {
    return (
      <Friends
        friends={this.props.friends}
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

export default connect(mapStateToProps,{
  getUserFriends
})(FriendsContainer)
