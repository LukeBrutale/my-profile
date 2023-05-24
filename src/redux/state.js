let reRender = () => {
  console.log('Hello');
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Luke', likes: '20' },
      { id: 2, message: 'Brutale', likes: '15' },
      { id: 3, message: 'Yura', likes: '5' },
    ],
    newPostText: 'Remember, be nice!',
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

//функція додає новий пост //
export const addPost = () => {
  let newPost = {
    id: 4,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  reRender(state);
};

//функція додає символи в текстерію //
export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  reRender(state);
};

export const subscribe = observer => {
  reRender = observer;
};

export default state;
