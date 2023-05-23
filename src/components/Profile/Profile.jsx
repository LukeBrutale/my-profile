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
        updateNewPostText={props.updateNewPostText}
        posts={props.profilePage.posts}
        addPost={props.addPost}
      />
    </div>
  );
};

export default Profile;
