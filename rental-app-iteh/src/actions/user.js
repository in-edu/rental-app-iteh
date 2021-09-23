import { GET_USER, GET_USER_FAIL, SET_MESSAGE } from "./types";
import userService from "../services/user.service";

export const getLoggedUser = () => (dispatch) => {
  userService.getUser().then(
    (response) => {
      dispatch({ type: GET_USER, payload: { user: response.data } });
      return Promise.resolve();
    },
    (error) => {
      const message = "Error";
      dispatch({ type: GET_USER_FAIL });
      dispatch({ type: SET_MESSAGE, payload: message });
      return Promise.reject();
    }
  );
};
