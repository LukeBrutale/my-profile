import React from "react";
import MyPostsContainer from "./MyPosts/MyPosts";
// import ProfileInfo from '../ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      {/* <ProfileInfo /> */}
      {/* <div>Avatar + dis</div> */}
      <MyPostsContainer
        message="My post"
        // posts={props.profilePage.posts}
        // newPostText={props.profilePage.newPostText}
        store={props.store}
      />
    </div>
  );
};

export default Profile;
