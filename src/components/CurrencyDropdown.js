import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

function CurrencyDropdown() {
  const { budget, dispatch, currency } = useContext(AppContext);

  const [selectedOption, setSelectedOption] = useState("Dollar");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: selectedOption,
    });
  },[selectedOption]);

  return (
    <div className="dropdown">
      {selectedOption && <p>Currency: </p>}
      <select
        className="custom-select"
        id="inputGroupSelect01"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="Dollar">$ Dollar</option>
        <option value="Pound">£ Pound</option>
        <option value="Euro">€ Euro</option>
        <option value="Rupee">₹ Rupee</option>
      </select>
    </div>
  );
}

export default CurrencyDropdown;


