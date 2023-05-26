let store = {
  _state: {
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
  },

  _reRender() {
    console.log('Hello');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._reRender = observer;
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      //функція додає новий пост //

      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._reRender(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      //функція додає символи в текстерію //

      this._state.profilePage.newPostText = action.newText;
      this._reRender(this._state);
    }
  },
};

export default store;
