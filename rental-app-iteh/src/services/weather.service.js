import axios from "axios";
export function getCurrentWeather() {
  return axios
    .post(
      process.env.REACT_APP_WEATHER_API_BASE_URL + "Now",
      {
        location: "Belgrade",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_WEATHER_API_TOKEN,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error while fetching weather api data", error.message);
      return null;
    });
}
