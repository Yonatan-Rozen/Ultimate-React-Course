import { createContext, useContext, useEffect, useReducer } from "react";

const SECS_PER_QUESTION = 30;

const QuizContext = createContext();

const initialState = {
  // questions array
  questions: [],

  // all possible status: loading, error, ready, active, finished
  status: "loading",

  // current question index
  index: 0,

  // selected answer option
  answer: null,

  // current user points
  points: 0,

  // highscore
  highscore: 0,

  secondsRemaining: null,
};

function reducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "dataReceived":
      return {
        ...state,
        questions: payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: payload,
        points:
          payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "resetQuiz":
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
        highscore: state.highscore,
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Unknown action type");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const totalPoints = questions.reduce(
    (acc, question) => acc + question.points,
    0
  );

  const question = questions[index];

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        question,
        totalPoints,
        status,
        dispatch,
        index,
        answer,
        points,
        secondsRemaining,
        highscore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("Quiz context was used outside the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
