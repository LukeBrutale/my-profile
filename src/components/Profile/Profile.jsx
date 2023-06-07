import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
// import ProfileInfo from '../ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = ({ store }) => {
  return (
    <div>
      {/* <ProfileInfo /> */}
      {/* <div>Avatar + dis</div> */}
      <MyPostsContainer message="My post" store={store} />
    </div>
  );
};

export default Profile;
