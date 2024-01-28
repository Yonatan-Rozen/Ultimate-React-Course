import { useState } from "react";

const App = () => {
  return (
    <div className="container">
      <Counter />
    </div>
  );
};
export default App;

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="container">
      <div>
        <input
          type="range"
          value={step}
          min={1}
          max={10}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span style={{ marginLeft: "5px" }}>{step}</span>
      </div>
      <div>
        <button className="btn" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <input
          className="count"
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button className="btn" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>

      <p className="message">
        {count > 0
          ? `${count} days from now is `
          : count === 0
          ? "Today is "
          : `${-count} days ago was `}
        {date.toDateString()}
      </p>

      {(count !== 0 || step !== 1) && (
        <button className="Reset" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
}
