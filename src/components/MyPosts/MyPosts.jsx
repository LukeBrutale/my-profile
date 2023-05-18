import React from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css';

const MyPosts = props => {
  let postData = [
    { id: 1, message: 'Luke', likes: '20' },
    { id: 2, message: 'Brutale', likes: '15' },
    { id: 3, message: 'Yura', likes: '5' },
  ];
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
        <div className={s.posts}>
          <Post
            message={postData[0].message}
            likes={postData[0].likes}
            id={postData[0].id}
          />
          <Post
            message={postData[1].message}
            likes={postData[1].likes}
            id={postData[1].id}
          />
          <Post
            message={postData[2].message}
            likes={postData[2].likes}
            id={postData[2].id}
          />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
