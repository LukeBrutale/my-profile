import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import {
  updateNewPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";

// const MyPostsContainer = ({ store }) => {
//   let state = store.getState();

//   // функція додає новий пост //
//   const addPost = () => {
//     store.dispatch(addPostActionCreator());
//   };

//   // функція додає новий символ у текстерію //
//   const onPostChange = (text) => {
//     let action = updateNewPostActionCreator(text);
//     store.dispatch(action);
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       posts={state.profilePage.posts}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
