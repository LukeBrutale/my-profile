const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Yura",
      status: "online",
      locayion: { city: "Kyiv", country: "Ukrine" },
    },
    {
      id: 2,
      followed: false,
      fullName: "Jonh",
      status: "offline",
      locayion: { city: "Colorado", country: "USA" },
    },
    {
      id: 3,
      followed: true,
      fullName: "Michael",
      status: "offline",
      locayion: { city: "Firenze", country: "Italia " },
    },
    {
      id: 4,
      followed: false,
      fullName: "David",
      status: "online",
      locayion: { city: "Kiel", country: "Deutschland" },
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
      return { ...state, users: action.users };
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
