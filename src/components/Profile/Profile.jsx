import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer message="My post" />
    </div>
  );
};

export default Profile;
