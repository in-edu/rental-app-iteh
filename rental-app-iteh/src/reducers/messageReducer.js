import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    GET_USER,
    GET_USER_FAIL,
  } from "../actions/types";
  
  const token = JSON.parse(localStorage.getItem("token"));
  
  const initalState = token
    ? { isLoggedIn: true, token}
    : { isLoggedIn: false, token: null };
  
  export default function authReducer(state = initalState, action) {
    const { type, payload } = action;
    switch (type) {
      case REGISTER_SUCCESS:
        return { ...state, isLoggedIn: false };
      case REGISTER_FAIL:
        return { ...state, isLoggedIn: false };
      case LOGIN_SUCCESS:
        return { ...state, isLoggedIn: true, token: payload.token };
      case LOGIN_FAIL:
        return { ...state, isLoggedIn: false, token: null };
      case LOGOUT:
        return { ...state, isLogin: false, token: null };
      case GET_USER:
        return { ...state, isLogin: true, token, user: payload.token };
      case GET_USER_FAIL:
        return { ...state, isLogin: false, token: null };
      default:
        return state;
    }
  }
  