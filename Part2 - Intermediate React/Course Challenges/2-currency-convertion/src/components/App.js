// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";
import Loader from "./Loader";

export default function App() {
  const [input, setInput] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [output, setOutput] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrencyConversion() {
        setIsLoading(true);

        if (input === 0) throw new Error("input is zero");

        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        setOutput(Number(data.rates[toCurrency]));
        setIsLoading(false);
      }

      // handle edge cases
      if (input === 0) return setOutput(0);
      if (fromCurrency === toCurrency) return setOutput(input);

      // make currency conversion
      fetchCurrencyConversion();
    },
    [input, fromCurrency, toCurrency]
  );

  function handleInputChange(e) {
    const currentValue = Number(e.target.value);
    setInput((prevValue) => (isNaN(currentValue) ? prevValue : currentValue));
  }

  return (
    <div className="App">
      <input type="text" value={input} onChange={handleInputChange} />
      <CurrencySelect onSetCurrency={setFromCurrency} disabled={isLoading} />
      <CurrencySelect onSetCurrency={setToCurrency} disabled={isLoading} />
      {isLoading && <Loader />}
      {!isLoading && output > 0 && (
        <p>
          {output} {toCurrency}
        </p>
      )}
    </div>
  );
}
