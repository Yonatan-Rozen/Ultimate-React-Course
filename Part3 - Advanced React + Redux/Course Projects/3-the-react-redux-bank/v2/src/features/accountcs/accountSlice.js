import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

console.log(requestLoan(1000, "Buy car"));
export default accountSlice.reducer;

/*
const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUESTLOAN = "account/requestLoan";
const ACCOUNT_PAYLOAD = "account/payLoan";
const ACCOUNNT_CONVERTING_CURRENCY = "account/convertingCurrency";

export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case ACCOUNT_WITHDRAW:
      return { ...state, balance: state.balance - action.payload };
    case ACCOUNT_REQUESTLOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case ACCOUNT_PAYLOAD:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    case ACCOUNNT_CONVERTING_CURRENCY:
      return { ...state, isLoading: true };

    default:
      return state;
  }
}

export function deposit(amount, currency) {
  if (currency === "USD") return { type: ACCOUNT_DEPOSIT, payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: ACCOUNNT_CONVERTING_CURRENCY });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: ACCOUNT_DEPOSIT, payload: converted });
  };
}
export function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
}
export function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUESTLOAN,
    payload: { amount, purpose },
  };
}
export function payLoan() {
  return { type: ACCOUNT_PAYLOAD };
}*/
