import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = props => {
  let posts = props.posts.map(p => (
    <Post message={p.message} likes={p.likes} id={p.id} />
  ));

  // строрює силку
  let newPostElement = React.createRef();

  // функція додає новий пост, передається в button //
  const addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={s.content}>
      <div className={s.addPost}>
        <textarea
          ref={newPostElement}
          placeholder="Remember, be nice!"
          cols="30"
          rows="5"
          className={s.textarea}
        ></textarea>
        <button onClick={addPost} className={s.btn}>
          Add post
        </button>
      </div>
      <div>
        <h3 className={s.mypost}>{props.message}</h3>
        <div className={s.posts}>{posts}</div>
      </div>
    </div>
  );
};

export default MyPosts;
