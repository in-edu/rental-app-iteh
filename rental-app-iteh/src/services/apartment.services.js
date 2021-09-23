import axios from "axios";
import authHeader from "./auth-header";

const getApartments = (filter, sort, order, search, page) => {
  if (filter === "") {
    return axios.get(process.env.REACT_APP_BASE_URL + "residentialProperty", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        sort,
        order,
        search,
        page,
      },
    });
  }
  return axios.get(process.env.REACT_APP_BASE_URL + "residentialProperty", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: {
      filter,
      sort,
      order,
      search,
      page,
    },
  });
};
const storeLikedApartments = (user_id, home_id) => {
  return axios.post(
    process.env.REACT_APP_BASE_URL_AUTH + "likedHome",
    { user_id, home_id },
    { headers: authHeader() }
  );
};
const getAllLikedApartmentsOfUser = (user_id) => {
  return axios.post(
    process.env.REACT_APP_BASE_URL_AUTH + "likedHomes",
    { user_id },
    { headers: authHeader() }
  );
};
const deleteLikedApartment = (user_id, home_id) => {
  return axios.delete(process.env.REACT_APP_BASE_URL_AUTH + "likedHome", {
    headers: authHeader(),
    data: { user_id, home_id },
  });
};
const deleteAllLikedApartment = (user_id) => {
  return axios.delete(process.env.REACT_APP_BASE_URL_AUTH + "likedHome", {
    headers: authHeader(),
    data: { user_id, home_id: "" },
  });
};
const getOneApartment = (home_id) => {
  return axios
    .get(process.env.REACT_APP_BASE_URL + "residentialProperty/" + home_id)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => console.log(error));
};

const deleteHome = (home_id) => {
  return axios.delete(process.env.REACT_APP_BASE_URL_AUTH + "residentialProperty/" + home_id, {
    headers: authHeader(),
  });
};

const getHomeImages = (home_id) => {
  return axios.get(
    process.env.REACT_APP_BASE_URL_AUTH + "fileuploads/" + home_id,
    {
      headers: authHeader(),
    }
  );
};
export default {
  getApartments,
  getAllLikedApartmentsOfUser,
  storeLikedApartments,
  deleteLikedApartment,
  deleteAllLikedApartment,
  getOneApartment,
  deleteHome,
  getHomeImages,
};
