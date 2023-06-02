import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Luke", likes: "20" },
        { id: 2, message: "Brutale", likes: "15" },
        { id: 3, message: "Yura", likes: "5" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Thanks" },
        { id: 4, message: "Somethink" },
      ],
      newMessageBody: "",
      dialogs: [
        { id: 1, name: "Luke" },
        { id: 2, name: "Brutale" },
        { id: 3, name: "Yura" },
        { id: 4, name: "Lena" },
      ],
    },
    sidebar: {},
  },

  _reRender() {
    console.log("Hello");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._reRender = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(
      this._state.profilePage,
      action
    );
    this._state.dialogsPage = dialogsReducer(
      this._state.dialogsPage,
      action
    );
    this._state.sidebar = sidebarReducer(
      this._state.sidebar,
      action
    );

    this._reRender(this._state);
  },
};

export default store;
