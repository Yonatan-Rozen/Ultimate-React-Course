import { combineReducers, createStore } from "redux";

const ACCOUNT_DEPOSIT = "account/deposit";
const ACCOUNT_WITHDRAW = "account/withdraw";
const ACCOUNT_REQUESTLOAN = "account/requestLoan";
const ACCOUNT_PAYLOAD = "account/payLoan";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case ACCOUNT_DEPOSIT:
      return { ...state, balance: state.balance + action.payload };
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

    default:
      return initialStateAccount;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return initialStateCustomer;
  }
}

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);

/*
store.dispatch({ type: "account/deposit", payload: 500 });
store.dispatch({ type: "account/withdraw", payload: 200 });
store.dispatch({
  type: "account/requestLoan",
  payload: { amount: 400, purpose: "buy a car" },
});
store.dispatch({ type: "account/payLoan" });
console.log(store.getState());
*/

function deposit(amount) {
  return { type: ACCOUNT_DEPOSIT, payload: amount };
}
function withdraw(amount) {
  return { type: ACCOUNT_WITHDRAW, payload: amount };
}
function requestLoan(amount, purpose) {
  return {
    type: ACCOUNT_REQUESTLOAN,
    payload: { amount, purpose },
  };
}
function payLoan() {
  return { type: ACCOUNT_PAYLOAD };
}

// example:
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(400, "Buy a car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());

function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Yonatan Rozer", "206016578"));
console.log(store.getState());
store.dispatch(updateName("Yonatan Rozen"));
console.log(store.getState());
