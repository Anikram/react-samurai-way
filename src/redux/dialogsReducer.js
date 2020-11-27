const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGES_TEXTAREA = 'UPDATE-MESSAGES-TEXTAREA';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push(
        {
          id: 7,
          message: state.newMessageText
        }
      );
      state.newMessageText = '';
      break
    case UPDATE_MESSAGES_TEXTAREA:
      state.newMessageText = action.message;
      break
    default:
      break
  }

  return state;
}

export default dialogsReducer;