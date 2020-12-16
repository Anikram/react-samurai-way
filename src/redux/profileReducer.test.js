import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
  posts: [
    {id: 1, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 23},
    {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 1},
    {id: 3, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 33},
    {id: 4, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 12},
    {id: 5, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 233},
    {id: 6, message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sed?', likeCount: 14},
  ],
  profile: null,
  status: ''
};

it ('should increment length of posts', () => {

  let action = addPost('profileReducer test text')

  let newState = profileReducer(state,action)

  expect(newState.posts.length).toBe(7);
})

it ('message of new post should be "profileReducer test text"', () => {

  let action = addPost('profileReducer test text')

  let newState = profileReducer(state,action)

  expect(newState.posts[6].message).toBe('profileReducer test text');
})

it ('should decrement length of posts', () => {

  let action = deletePost(1)

  let newState = profileReducer(state,action)

  expect(newState.posts.length).toBe(5);
})
