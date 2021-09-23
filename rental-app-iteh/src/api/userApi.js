import axios from "axios";
import { handleError, handleResponse } from "./apiUtils";

export function getUser(token) {
  if (!token) {
    return null;
  }

  return axios
    .get(process.env.REACT_APP_BASE_URL + "auth/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then(handleResponse)
    .catch(handleError);
}
