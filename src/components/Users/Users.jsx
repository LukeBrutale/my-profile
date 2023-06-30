import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Users.module.css';
import userPhoto from '../../icons/3-53.jpg'

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

  return (
    <div >
      <div className={s.pages}>
        {pages.map(p => {
          return <span className={props.currentPage === p && s.selected}
            onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
        })}
      </div>
      {props.users.map(u => (
        <div className={s.container} key={u.id}>
          <span>
            <div className={s.avatar}>
              <NavLink to={'./../profile/' + u.id}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava" />
              </NavLink>
            </div>
            <div>
              {
                u.followed
                  ? (<button className={s.btn} onClick={() => { props.unfollow(u.id) }}>unfollow</button>)
                  : (<button className={s.btn} onClick={() => { props.follow(u.id) }}>follow</button>)
              }
            </div>
          </span>
          <span className={s.infoUsers}>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              {/* <div>{u.location.country}</div>
              <div>{u.location.city}</div> */}
            </span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default Users;