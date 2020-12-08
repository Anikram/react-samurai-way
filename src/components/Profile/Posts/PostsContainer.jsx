import {addLike, addPost} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}

const PostsContainer = connect(mapStateToProps,{
  addPost,
  addLike
})(Posts);

export default PostsContainer;