import axios from "axios";
import authHeader from "./auth-header";

const getUser = () => {
  return axios.get(process.env.REACT_APP_BASE_URL_AUTH + "user", {
    headers: authHeader(),
  });
};
export default { getUser };
