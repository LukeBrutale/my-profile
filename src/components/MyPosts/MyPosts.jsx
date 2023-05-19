import React from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css';

const MyPosts = props => {
  let postsData = [
    { id: 1, message: 'Luke', likes: '20' },
    { id: 2, message: 'Brutale', likes: '15' },
    { id: 3, message: 'Yura', likes: '5' },
  ];

  let posts = postsData.map(p => (
    <Post message={p.message} likes={p.likes} id={p.id} />
  ));

  return (
    <div className={s.content}>
      <div className={s.addPost}>
        <textarea
          placeholder="Remember, be nice!"
          cols="30"
          rows="5"
          className={s.textarea}
        ></textarea>
        <button className={s.btn}>Add post</button>
      </div>
      <div>
        <h3 className={s.mypost}>{props.message}</h3>
        <div className={s.posts}>{posts}</div>
      </div>
    </div>
  );
};

export default MyPosts;
