const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEWMESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Luke', likes: '20' },
        { id: 2, message: 'Brutale', likes: '15' },
        { id: 3, message: 'Yura', likes: '5' },
      ],
      newPostText: '',
    },
    messagesPage: {
      messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'Thanks' },
        { id: 4, message: 'Somethink' },
      ],
      newMessageBody: '',
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
    //функція додає новий пост ___________________________________________//
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4,
        message: this._state.profilePage.newPostText,
        likes: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._reRender(this._state);

      //функція додає символи в текстерію на сторінці профіль_____________//
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._reRender(this._state);

      //функція додає символи в текстерію на сторінці діалоги____________//
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.messagesPage.newMessageBody = action.body;
      this._reRender(this._state);

      //функція відправляє нове повідомлення на сторінці діалоги____________//
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.messagesPage.newMessageBody;
      this._state.messagesPage.newMessageBody = '';
      this._state.messagesPage.messages.push({ id: 6, message: body });
      this._reRender(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = body => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;
