const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Luke", likes: "20" },
    { id: 2, message: "Brutale", likes: "15" },
    { id: 3, message: "Yura", likes: "5" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy = { ...state };
  //функція додає новий пост ___________________________________________//
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likes: 0,
      };
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }

    //функція додає символи в текстерію на сторінці профіль_____________//
    case UPDATE_NEW_POST_TEXT: {
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
