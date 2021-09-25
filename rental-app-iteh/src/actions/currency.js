import { SET_CURRENCY_RATES, SET_CURRENT_CURRENCY } from "./types";
// rate - odnos dolara u odnosu na drugu valutu 
export const setCurrencyRates = (rates)=> ({
    type: SET_CURRENCY_RATES,
    payload: rates
})
// currency - lista vrednosti valuta
export const setCurrentCurrency = (currency)=> ({
    type: SET_CURRENT_CURRENCY,
    payload: currency
})