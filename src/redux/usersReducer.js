const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://otkritkis.com/wp-content/uploads/2021/11/3-53.jpg",
      followed: true,
      fullName: "Yura",
      status: "online",
      location: { city: "Kyiv", country: "Ukrine" },
    },
    {
      id: 2,
      photoUrl:
        "https://otkritkis.com/wp-content/uploads/2021/11/3-53.jpg",
      followed: false,
      fullName: "Jonh",
      status: "offline",
      location: { city: "Colorado", country: "USA" },
    },
    {
      id: 3,
      photoUrl:
        "https://otkritkis.com/wp-content/uploads/2021/11/3-53.jpg",
      followed: true,
      fullName: "Michael",
      status: "offline",
      location: { city: "Firenze", country: "Italia " },
    },
    {
      id: 4,
      photoUrl:
        "https://otkritkis.com/wp-content/uploads/2021/11/3-53.jpg",
      followed: false,
      fullName: "David",
      status: "online",
      location: { city: "Kiel", country: "Deutschland" },
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});
export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});

export default usersReducer;
