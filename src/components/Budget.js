

import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);

  return (
    <div className="row">
      <div className="alert alert-secondary">
        <span>
          Budget: {currency} 
          <input
            required="required"
            type="number"
            id="budget"
            value={budget}
            style={{ width: "10rem" }}
            onChange={(event) => {
              if (event.target.value > 20000) {
                alert("The value cannot exceed 20000");
              } else if (event.target.value < totalExpenses) {
                alert("The value cannot be less than the total expenses");
              } else {
                dispatch
                ({
                  type: "SET_BUDGET",
                  payload: event.target.value,
                });
              }
            }}
            step={10}
          ></input>
        </span>
      </div>
    </div>
  );
};
export default Budget;