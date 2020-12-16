const ADD_MESSAGE = '/dialogs/ADD-MESSAGE';

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
  ]
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: (state.messages.length + 1),
          message: action.newMessageText
        }]
      };
    default:
      return state;
  }
};

export const sendMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});
export default dialogsReducer;