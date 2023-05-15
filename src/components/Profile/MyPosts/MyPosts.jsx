import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div>
        My Posts
        <div className={s.posts}>
          <Post message="Hello Luke" />
          <Post message="Its good" />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
