import {
  GET_APARTMENT_SUCCESS,
  GET_APARTMENT_FAIL,
  SET_MESSAGE,
  ADD_LIKED_APARTMENT,
  DELETE_LIKED_APARTMENT,
  DELETE_ALL_LIKED_APARTMENT,
  DELETE_APARTMENT,
} from "./types";
import apartmentService from "../services/apartment.services";

export const getApartments =
  (filter, sort, order, search, page) => (dispatch) => {
    return apartmentService
      .getApartments(filter, sort, order, search, page)
      .then(
        (response) => {
          dispatch({
            type: GET_APARTMENT_SUCCESS,
            payload: { apartments: response.data.data },
          });

          dispatch({
            type: SET_MESSAGE,
            payload: response.data.message,
          });

          return response;
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          dispatch({
            type: GET_APARTMENT_FAIL,
          });

          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });

          return Promise.reject();
        }
      );
  };
export const storeLikedApartments = (user_id, home_id) => (dispatch) => {
  return apartmentService.storeLikedApartments(user_id, home_id).then(
    (response) => {
      console.log("Store" + response.data);
      dispatch({
        type: ADD_LIKED_APARTMENT,
        payload: { likedApartments: response.data[0] },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: GET_APARTMENT_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
// export const getAllLikedApartmentsOfUser = (user_id) => (dispatch) => {
//   return apartmentService.getAllLikedApartmentsOfUser(user_id).then(
//     (response) => {
//       console.log(response.data);
//       dispatch({
//         type: ADD_LIKED_APARTMENT,
//         payload: { likedApartments: response.data },
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: response.data.message,
//       });

//       return Promise.resolve();
//     },
//     (error) => {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();

//       dispatch({
//         type: GET_APARTMENT_FAIL,
//       });

//       dispatch({
//         type: SET_MESSAGE,
//         payload: message,
//       });

//       return Promise.reject();
//     }
//   );
// };

export const deleteLikedApartment = (user_id, home_id) => (dispatch) => {
  return apartmentService.deleteLikedApartment(user_id, home_id).then(
    (response) => {
      dispatch({
        type: DELETE_LIKED_APARTMENT,
        payload: { likedApartments: response.data },
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
export const deleteAllLikedApartment = (user_id) => (dispatch) => {
  return apartmentService.deleteLikedApartment(user_id).then(
    (response) => {
      dispatch({
        type: DELETE_ALL_LIKED_APARTMENT,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteApartment = (home_id) => (dispatch) => {
  return apartmentService.deleteHome(home_id).then(
    (response) => {
      dispatch({
        type: DELETE_APARTMENT,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
