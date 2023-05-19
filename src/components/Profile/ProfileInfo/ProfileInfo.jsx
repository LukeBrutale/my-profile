import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
  return (
    <div>
      <img
        className={s.img}
        src="https://wallpapers.com/images/featured/beach-background-tg3uh15tj9rwzru5.webp"
        alt=""
      />
    </div>
  );
};

export default ProfileInfo;
