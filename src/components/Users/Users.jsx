import React from "react";
import s from "./Users.module.css";

let Users = (props) => {
  return (
    <div>
      {props.users.map((u) =>(
        <div key={u.id}>
          <span>
            <div className={s.avatar}>
              <img src={u.photoUrl} alt="ava" />
            </div>
            <div>
              {u.followed
                ? (<button onClick={() => { props.unfollow(u.id) }}>unfollow</button>)
                : (<button onClick={() => { props.follow(u.id) }}>follow</button>)
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
