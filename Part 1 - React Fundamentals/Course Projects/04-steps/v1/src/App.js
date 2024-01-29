import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const isActive = (step, cur) => {
  return step >= cur ? "active" : "";
};

export default function App() {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handleClose() {
    setClose((c) => !c);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>

      {!close && (
        <div className="steps">
          <div className="numbers">
            <div className={isActive(step, 1)}>1</div>
            <div className={isActive(step, 2)}>2</div>
            <div className={isActive(step, 3)}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
