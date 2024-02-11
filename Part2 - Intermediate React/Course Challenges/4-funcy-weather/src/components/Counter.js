import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + this.state.counter);

  function handleDecrement() {
    setCounter((c) => c - 1);
  }

  function handleIncrement() {
    setCounter((c) => c + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <span>
        {date.toDateString()} [{counter}]
      </span>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
