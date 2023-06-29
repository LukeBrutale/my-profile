import React from 'react';
import s from './ProfileInfo.module.css';
// import Preloader from '../../common/preloader/Preloader'

const ProfileInfo = (props) => {
  // if (!props.profile) {
  //   return <Preloader />
  // }

  return (
    <div>
      <img
        className={s.img}
        src="https://wallpapers.com/images/featured/beach-background-tg3uh15tj9rwzru5.webp"
        alt=""
      />
      <div><img src={props.profile.photos.large} alt='' /></div>
      {/* <span>{props.profile.aboutMe}</span> */}
    </div>
  );
};

export default ProfileInfo;
