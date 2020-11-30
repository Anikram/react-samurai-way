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
      let newMessage = {
        id: 5,
        message: state.newMessageText
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ''
      };

    case UPDATE_MESSAGES_TEXTAREA:
      return {
        ...state,
        newMessageText: action.message
      }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateMessageActionCreator = (message) => ({type: UPDATE_MESSAGES_TEXTAREA, message: message});
export default dialogsReducer;