import {renderEntireTree} from "../render";

let state = {

  profilePage: {
    posts: [
      {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 23},
      {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 1},
      {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 33},
      {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 12},
      {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 233},
      {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 14},
    ],
    buffer: ""
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
      {id: 1, text: 'Who are you?'},
      {id: 2, text: 'What are you?'},
      {id: 3, text: 'Why are you?'},
      {id: 4, text: 'When are you?'},
      {id: 5, text: 'How are you?'},
    ]
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
      {id: 1, name: 'Felix' },
      {id: 2, name: 'Atom' },
      {id: 3, name: 'Braian' },
      {id: 4, name: 'Morgan' },
      {id: 5, name: 'Emma' },
    ]
  },



};

export let addPost = () => {
  state.profilePage.posts.push(
    {
      id: 7,
      message: state.profilePage.buffer,
      likeCount: 0
    }
  )
  state.profilePage.buffer = '';
  renderEntireTree(state);
};

export let listenTextArea = (text) => {
  state.profilePage.buffer = text;
  renderEntireTree(state);
}

export default state;