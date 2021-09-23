import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

export function getFilteredHomes(filter, sort, order, search, page) {
  if (filter === "") {
    return axios
      .get(process.env.REACT_APP_BASE_URL + "residetialProperty", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        params: {
          search,
          sort,
          order,
          page,
        },
      })
      .then(handleResponse)
      .catch(handleError);
  }
  return axios
    .get(process.env.REACT_APP_BASE_URL + "residetialProperty", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      params: {
        search,
        filter,
        sort,
        order,
        page,
      },
    })
    .then(handleResponse)
    .catch(handleError);
}

export function getCategories() {
  return axios
    .get(process.env.REACT_APP_BASE_URL + "residentialProperty/categories")
    .then(handleResponse)
    .catch(handleError);
}
export function deleteHome(home) {
  const url = process.env.REACT_APP_BASE_URL + "home/" + home;
  return axios
    .get(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json", // Indicates the content
        "X-CSRF-TOKEN": document
          .querySelector('[name="csrf-token"]')
          .getAttribute("content"),
      },
    })
    .then((response) => {
      if (true) return response.status;
      throw new Error("Network response was not ok");
    })
    .catch(handleError);
}
