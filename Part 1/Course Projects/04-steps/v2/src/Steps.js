import { useState } from "react";
import Button from "./Button";
import StepMessage from "./StepMessage";

const Steps = ({ messages }) => {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);

  const isActive = (step, cur) => {
    return step >= cur ? "active" : "";
  };

  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  return (
    <>
      <button
        style={{
          transform: close ? "rotate(45deg)" : "rotate(0deg)",
        }}
        className="close"
        onClick={() => {
          setClose((close) => !close);
        }}
      >
        &times;
      </button>

      {!close && (
        <div className="steps">
          <div className="numbers">
            <div className={isActive(step, 1)}>1</div>
            <div className={isActive(step, 2)}>2</div>
            <div className={isActive(step, 3)}>3</div>
          </div>

          <StepMessage step={step}>
            <span>{messages[step - 1]}</span>
          </StepMessage>

          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
export default Steps;
