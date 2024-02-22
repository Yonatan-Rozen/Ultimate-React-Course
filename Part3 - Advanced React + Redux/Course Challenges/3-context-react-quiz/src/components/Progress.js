import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { index, questions, points, totalPoints, answer } = useQuiz();

  return (
    <header className="progress">
      <progress
        max={questions.length}
        value={index + Number(answer !== null)}
      />
      <p>
        Question <strong>{index + 1}</strong> / {questions.length}
      </p>

      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
}
