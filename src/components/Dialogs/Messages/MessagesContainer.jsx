import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {dispatch(addMessageActionCreator())},
    changeMessageText: (message) => {dispatch(updateMessageActionCreator(message))},
  };
};

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps) (Messages);

export default MessagesContainer;