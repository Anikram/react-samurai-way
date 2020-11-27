const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGES_TEXTAREA = 'UPDATE-MESSAGES-TEXTAREA';

let initialState = {
  dialogs: [
    {id: 1, name: 'Alexa'},
    {id: 2, name: 'Balexa'},
    {id: 3, name: 'Calexa'},
    {id: 4, name: 'Dalexa'},
    {id: 5, name: 'Ealexa'},
  ],

  messages: [
    {id: 1, message: 'Who are you?'},
    {id: 2, message: 'What are you?'},
    {id: 3, message: 'Why are you?'},
    {id: 4, message: 'When are you?'},
    {id: 5, message: 'How are you?'},
  ],
  newMessageText: ""
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      state.messages.push(
        {
          id: 7,
          message: state.newMessageText
        }
      );
      state.newMessageText = '';
      return state;
    case UPDATE_MESSAGES_TEXTAREA:
      state.newMessageText = action.message;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (message) => ({type: UPDATE_MESSAGES_TEXTAREA, message: message});
export default dialogsReducer;