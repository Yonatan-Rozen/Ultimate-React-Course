import { useReducer } from "react";
import "./styles.css";

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,

  depositVal: 500,
  withdrawVal: 0,
  loanVal: 0,
};

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "openAccount":
      return {
        ...state,
        isActive: true,
        balance: state.balance + state.depositVal,
        depositVal: 150,
        withdrawVal: 50,
        loanVal: 50000,
      };
    case "deposit":
      return { ...state, balance: state.balance + state.depositVal };
    case "withdraw":
      return { ...state, balance: state.balance - state.withdrawVal };
    case "requestLoan":
      return {
        ...state,
        loan: state.loan + state.loanVal,
        balance: state.balance + state.loanVal,
      };
    case "payLoan":
      return { ...state, loan: 0, balance: state.balance - state.loan };
    case "closeAccount":
      return initialState;
    case "setDeposit":
      return { ...state, depositVal: isNaN(payload) ? 0 : payload };
    case "setWithdraw":
      return { ...state, withdrawVal: isNaN(payload) ? 0 : payload };
    case "setLoan":
      return { ...state, loanVal: isNaN(payload) ? 0 : payload };
    default:
      throw new Error("Unkown action type");
  }
}

export default function App() {
  const [
    { balance, loan, isActive, depositVal, withdrawVal, loanVal },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      {isActive && (
        <>
          <p>Balance: {balance}</p>
          <p>Loan: {loan}</p>
        </>
      )}

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>

      <p>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "deposit" });
          }}
          disabled={!isActive}
        >
          Deposit
        </button>
        <input
          type="number"
          value={depositVal}
          onChange={(e) =>
            dispatch({ type: "setDeposit", payload: Number(e.target.value) })
          }
          disabled={!isActive}
        />
      </p>

      <p className="input-container">
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "withdraw" });
          }}
          disabled={!isActive}
        >
          Withdraw
        </button>
        <input
          type="number"
          value={withdrawVal}
          onChange={(e) =>
            dispatch({ type: "setWithdraw", payload: Number(e.target.value) })
          }
          disabled={!isActive}
        />
      </p>

      <p>
        <button
          className="btn"
          onClick={() => {
            dispatch({ type: "requestLoan" });
          }}
          disabled={!isActive || 0 !== loan}
        >
          Request a loan of
        </button>
        <input
          type="number"
          value={loanVal}
          onChange={(e) =>
            dispatch({ type: "setLoan", payload: Number(e.target.value) })
          }
          disabled={!isActive || 0 !== loan}
        />
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan" });
          }}
          disabled={!isActive || 0 === loan}
        >
          Pay loan
        </button>
      </p>

      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive || 0 !== balance || 0 !== loan}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
