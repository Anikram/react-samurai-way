let initialState = {
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
};

const newsReducer = (state = initialState, action) => {
  return state;
};

export default newsReducer;