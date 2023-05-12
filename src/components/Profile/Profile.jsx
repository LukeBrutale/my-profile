import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <img
        className={s.img}
        src="https://wallpapers.com/images/featured/beach-background-tg3uh15tj9rwzru5.webp"
        alt=""
      />
      <div>avatar, disc</div>
      <div>
        my post
        <div className={s.posts}>
          <div>New Post</div>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
