import {sendMessage} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  };
};

const MessagesContainer = connect(mapStateToProps,{
  sendMessage
}) (Messages);

export default MessagesContainer;