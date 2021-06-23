const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://i.ibb.co/NFN5wyD/hats.jpg',
      id: 1,
      linkUrl: 'hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/4VBQ0S2/jackets.jpg',
      id: 2,
      linkUrl: '',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/9NLgfrV/sneakers.jpg',
      id: 3,
      linkUrl: '',
    },
    {
      title: 'womens',
      imageUrl: 'https://i.ibb.co/k8X37ys/womens.webp',
      size: 'large',
      id: 4,
      linkUrl: '',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/rpHdQV3/mens.jpg',
      size: 'large',
      id: 5,
      linkUrl: '',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
