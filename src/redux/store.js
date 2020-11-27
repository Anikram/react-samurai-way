import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
  _subscriber() {
    console.log('Morph "_subscriber()" into render function');
  },
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 23},
        {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 1},
        {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 33},
        {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 12},
        {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 233},
        {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 14},
      ],
      newPostText: ""
    },
    dialogsPage: {
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
    },
    newsPage: {
      newsPosts: [
        {
          id: 1,
          title: 'Lorem ipsum dolor sit amet.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'
        },
        {
          id: 5,
          title: 'Lorem ipsum dolor sit amet.',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ipsa iusto modi. Distinctio facere, ipsa?'
        },
      ]
    },

    friendsPage: {
      friends: [
        {id: 1, name: 'Felix'},
        {id: 2, name: 'Atom'},
        {id: 3, name: 'Braian'},
        {id: 4, name: 'Morgan'},
        {id: 5, name: 'Emma'},
      ]
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._subscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._subscriber(this._state);
  }
}

export default store;

window.store = store;