import React from 'react';
import MyPosts from './MyPosts/MyPosts';
// import ProfileInfo from '../ProfileInfo/ProfileInfo';
// import s from './Profile.module.css';

const Profile = props => {
  return (
    <div>
      {/* <ProfileInfo /> */}
      {/* <div>Avatar + dis</div> */}
      <MyPosts
        message="My post"
        newPostText={props.profilePage.newPostText}
        posts={props.profilePage.posts}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
