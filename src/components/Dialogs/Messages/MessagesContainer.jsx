import React from 'react';
import {addMessageActionCreator, updateMessageActionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import StoreContext from "../../../StoreContext";

const MessagesContainer = () => {

  return (
    <StoreContext.Consumer>
      { store => {
        let state = store.getState().dialogsReducer;
        let messages = state.messages;
        let newMessageText = state.newMessageText;
        let sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        }
        let changeMessageText = (message) => {
          store.dispatch(updateMessageActionCreator(message));
        }
        return (
          <Messages sendMessage={sendMessage} newMessageText={newMessageText} messages={messages}
                    changeMessageText={changeMessageText}/>
        )
      }
    }
    </StoreContext.Consumer>
  )
};

export default MessagesContainer;