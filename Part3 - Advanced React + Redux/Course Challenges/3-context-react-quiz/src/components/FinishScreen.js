import { useQuiz } from "../contexts/QuizContext";

export default function FinishScreen() {
  const { points, totalPoints, highscore, dispatch } = useQuiz();

  const percentage = (points * 100) / totalPoints;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (80 <= percentage && percentage < 100) emoji = "🥈";
  if (50 <= percentage && percentage < 80) emoji = "🥉";
  if (0 < percentage && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦🏻‍♂️";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You Scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "resetQuiz" })}
      >
        Reset Quiz
      </button>
    </>
  );
}
