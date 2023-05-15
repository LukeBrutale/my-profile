import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          className={s.img}
          src="https://wallpapers.com/images/featured/beach-background-tg3uh15tj9rwzru5.webp"
          alt=""
        />
      </div>
      <din>Avatar + dis</din>
      <MyPosts message="My  posts" />
    </div>
  );
};

export default Profile;
