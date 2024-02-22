import { useQuiz } from "../contexts/QuizContext";

export default function NextButton() {
  const { dispatch, answer, index, questions } = useQuiz();

  if (answer === null) return null;

  if (index < questions.length - 1) {
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  }

  if (index === questions.length - 1) {
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
