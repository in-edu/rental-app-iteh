import { GET_USER, GET_USER_FAIL } from "../actions/types";

const initalState = { isAdmin: false, user:null };

export default function userReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        isAdmin: payload.user.admin === 1,
        user: payload.user,
      };
    case GET_USER_FAIL:
      return { ...state, isAdmin: false, user: null };
    default:
      return state;
  }
}
