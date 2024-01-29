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
  const [count, setCount] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="container">
        <button onClick={() => step > 1 && setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="container">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count > 0
          ? `${count} days from now is`
          : count === 0
          ? "Today is"
          : `${-count} days ago was`}{" "}
        {date.toDateString()}
      </p>
    </div>
  );
}
