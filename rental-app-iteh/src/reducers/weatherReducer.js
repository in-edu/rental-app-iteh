import {
    SET_CURRENT_WEATHER
  } from "../actions/types";
    
  const initalState = {
      currentWeather: null
  }
  
  export default function authReducer(state = initalState, action) {
    const { type, payload } = action;
    switch (type) {
      case SET_CURRENT_WEATHER:
        console.log("Weather payload: " ,payload);
        return { ...state, currentWeather: payload };
      default:
        return state;
    }
  }
  