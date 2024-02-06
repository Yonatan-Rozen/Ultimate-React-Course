import { useState } from "react";

export default function CurrencySelect({ onSetCurrency, disabled }) {
  const [currency, setCurrency] = useState("USD");

  function handleCurrencyChange(e) {
    setCurrency(e.target.value);
    onSetCurrency && onSetCurrency(e.target.value);
  }

  return (
    <select
      value={currency}
      onChange={handleCurrencyChange}
      disabled={disabled}
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
