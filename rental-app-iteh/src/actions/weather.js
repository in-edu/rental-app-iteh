import { SET_CURRENT_WEATHER } from "./types";
// ternutno vreme
export const setCurrentWeather = (weather)=> ({
    payload: weather,
    type: SET_CURRENT_WEATHER,
}) 