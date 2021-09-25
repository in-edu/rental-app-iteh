import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setCurrentCurrency } from "../actions/currency";

export const CurrencySelector = () => {
  const currencies = useSelector((state) => state.currencyReducer.currencies);
  const current = useSelector(state=> state.currencyReducer.current);
  const dispatch = useDispatch();
  return (
    <div className="sort">
      <Selector
        defaultValue="USD"
        value={current}
        onChange={(e) => {
          dispatch(setCurrentCurrency(e.target.value));
        }}
      >
        <option value="" disabled>
          -Select currency-
        </option>
        {}
        {currencies.map((currency) => (
          <option value={currency}>{currency}</option>
        ))}
      </Selector>
    </div>
  );
};

const Selector = styled.select`
    width: 60px;
`