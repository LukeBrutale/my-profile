import React from 'react';
import s from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../icons/3-53.jpg'

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
            return <span className={this.props.currentPage === p && s.selected}
              onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
          })}
        </div>
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
