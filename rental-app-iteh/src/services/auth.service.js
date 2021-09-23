import axios from "axios";
import { handleResponse, handleError } from "../api/apiUtils";
import authHeader from "../services/auth-header";


const register = (fName, lName,  email, password, username) => {
  return axios.post(
    process.env.REACT_APP_BASE_URL_AUTH + "register",
    {
      fName,
      lName,
      email,
      password,
      username
    },
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

const login = (email, password) => {
  return axios
    .post(
      process.env.REACT_APP_BASE_URL_AUTH + "login",
      { email, password },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("token");
};

const getUser = () => {
  return axios
    .get(process.env.REACT_APP_BASE_URL_AUTH + "user", {
      headers: authHeader(),
    })
    .then(handleResponse)
    .catch(handleError);
};

export default {
  register,
  login,
  logout,
  getUser,
};
