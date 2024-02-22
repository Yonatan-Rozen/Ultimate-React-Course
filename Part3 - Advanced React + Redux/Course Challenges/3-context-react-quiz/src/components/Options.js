export default function Options({ dispatch, question, answer }) {
  const isAnswerSelected = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          key={option}
          disabled={isAnswerSelected}
          className={`btn btn-option ${i === answer ? "answer" : ""} 
          ${
            isAnswerSelected &&
            (i === question.correctOption ? "correct" : "wrong")
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
