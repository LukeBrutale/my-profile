let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Luke', likes: '20' },
      { id: 2, message: 'Brutale', likes: '15' },
      { id: 3, message: 'Yura', likes: '5' },
    ],
  },
  messagesPage: {
    messages: [
      { id: 1, message: 'Hello' },
      { id: 2, message: 'How are you?' },
      { id: 3, message: 'Thanks' },
      { id: 4, message: 'Somethink' },
    ],
    dialogs: [
      { id: 1, name: 'Luke' },
      { id: 2, name: 'Brutale' },
      { id: 3, name: 'Yura' },
      { id: 4, name: 'Lena' },
    ],
  },
};

export let addPost = postMessage => {
  let newPost = {
    id: 4,
    message: postMessage,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
};

export default state;
