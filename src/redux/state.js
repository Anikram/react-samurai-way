let store = {
  _subscriber() {
    console.log('State rerender');
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
    if (action.type === 'ADD-POST') {
      this._state.profilePage.posts.push(
        {
          id: 7,
          message: this._state.profilePage.newPostText,
          likeCount: 0
        }
      )
      this._state.profilePage.newPostText = '';
      this._subscriber(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      this._state.dialogsPage.messages.push(
        {
          id: 7,
          message: this._state.dialogsPage.newMessageText
        }
      )
      this._state.dialogsPage.newMessageText = '';
      this._subscriber(this._state);
    } else if (action.type === 'UPDATE-POSTS-TEXTAREA') {
      this._state.profilePage.newPostText = action.message;
      this._subscriber(this._state);
    } else if (action.type === 'UPDATE-MESSAGES-TEXTAREA') {
      this._state.dialogsPage.newMessageText = action.message;
      this._subscriber(this._state);
    }
  }
}

export default store;

export const updateMessageActionCreator = (message) => ({type: 'UPDATE-MESSAGES-TEXTAREA', message: message});

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'});

export const updatePostActionCreator = (message) => ({type: 'UPDATE-POSTS-TEXTAREA', message: message});

export const addPostActionCreator = () => ({type: 'ADD-POST'});

window.store = store;