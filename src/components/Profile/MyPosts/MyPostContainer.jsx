import React from "react";
import MyPosts from "./MyPosts";
import {
  updateNewPostActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";

const MyPostsContainer = ({ store }) => {
  let state = store.getState();

  // функція додає новий пост //
  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  // функція додає новий символ у текстерію //
  const onPostChange = (text) => {
    let action = updateNewPostActionCreator(text);
    store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
