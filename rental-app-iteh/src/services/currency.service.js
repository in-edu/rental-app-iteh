import axios from "axios";

export function getUSDCurrencyRates() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth =
    Number(currentDate.getMonth()) + 1 < 10
      ? "0" + (Number(currentDate.getMonth()) + 1)
      : Number(currentDate.getMonth()) + 1;
  const currentDay = currentDate.getDate();
  const date = currentYear + "-" + currentMonth + "-" + currentDay;
//date mora da bude YYYY-MM-DD
  return axios
    .post(
      process.env.REACT_APP_CURRENCY_API_BASE_URL + "History",
      {
        code: "USD",
        date: date,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + process.env.REACT_APP_CURRENCY_API_TOKEN,
        },
      }
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("error while fetching currency api data", error.message);
      return null;
    });
}
