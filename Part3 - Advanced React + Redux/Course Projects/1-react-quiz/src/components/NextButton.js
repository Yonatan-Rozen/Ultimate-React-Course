export default function NextButton({
  dispatch,
  answer,
  index,
  amountOfQuestions,
}) {
  if (answer === null) return null;

  if (index < amountOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === amountOfQuestions - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish Quiz
      </button>
    );
  }
}
