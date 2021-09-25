import { SET_CURRENCY_RATES, SET_CURRENT_CURRENCY } from "../actions/types";

const initalState = {
  rates: {
    USD: 1,
  },
  currencies: ["USD"],
  current: "USD",
  rate: 1,
};

export default function authReducer(state = initalState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENCY_RATES:
      console.log('SET_CURRENCY_RATES payload',payload)
      return { ...state, rates: payload, currencies: Object.keys(payload) };
    case SET_CURRENT_CURRENCY:
        return { ...state, current:payload, rate: state.rates[payload] };
    default:
      return state;
  }
}
