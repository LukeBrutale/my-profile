import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = (props) => {
  let postsEl = props.posts.map((p) => (
    <Post message={p.message} likes={p.likes} id={p.id} />
  ));

  // створює силку на текстерію //
  let newPostElement = React.createRef();

  // функція додає новий пост //
  const onAddPost = () => {
    props.addPost();
  };

  // функція додає новий символ у текстерію //
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.content}>
      <div className={s.addPost}>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
          placeholder="Remember, be nice..."
          cols="30"
          rows="5"
          className={s.textarea}
        />
        <button onClick={onAddPost} className={s.btn}>
          Add post
        </button>
      </div>
      <div>
        <h3 className={s.mypost}>{props.message}</h3>
        <div className={s.posts}>{postsEl}</div>
      </div>
    </div>
  );
};

export default MyPosts;
