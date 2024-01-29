import React from "react";
import "./index.css";
import Steps from "./Steps";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  return (
    <div>
      <Steps messages={messages} />
    </div>
  );
};
export default App;
