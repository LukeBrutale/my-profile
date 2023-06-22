import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../icons/3-53.jpg'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    return (
      <div >
        {this.props.users.map(u => (
          <div className={s.container} key={u.id}>
            <span>
              <div className={s.avatar}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="ava" />
              </div>
              <div>
                {
                  u.followed
                    ? (<button className={s.btn} onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>)
                    : (<button className={s.btn} onClick={() => { this.props.follow(u.id) }}>follow</button>)
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
}


export default Users;
