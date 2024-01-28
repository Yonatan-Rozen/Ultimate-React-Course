import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ friend, onUpdateBalance }) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState("user");
  const friendExpense = bill ? bill - yourExpense : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !yourExpense) return;

    onUpdateBalance(payer === "user" ? friendExpense : -yourExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>

      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => {
          const value = Number(e.target.value);
          setBill(isNaN(value) || value === 0 ? "" : Number(e.target.value));
          setYourExpense("");
        }}
      />

      <label>🧍‍♂️ Your exspense</label>
      <input
        type="text"
        value={yourExpense}
        disabled={bill === ""}
        onChange={(e) => {
          const value = Number(e.target.value);
          setYourExpense(
            isNaN(value) || value === 0 ? "" : Math.min(Number(value), bill)
          );
        }}
      />

      <label>👫 {friend.name}'s expense</label>
      <input disabled type="text" value={friendExpense} />

      <label>🤑 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
