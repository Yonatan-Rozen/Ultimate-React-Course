import { useState } from "react";
import BillInput from "./BillInput";
import PercentInput from "./PercentInput";
import TotalBill from "./TotalBill";

export default function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [yourPercent, setYourPercent] = useState(0);
  const [friendPercent, setFriendPercent] = useState(0);
  const averagePercent = (yourPercent + friendPercent) / 2;
  const tip = (bill * averagePercent) / 100;

  function handleReset() {
    setBill(0);
  }

  return (
    <>
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} setBill={setBill}>
        How much was the bill?
      </BillInput>
      <PercentInput percent={yourPercent} setPercent={setYourPercent}>
        How did you like the service?
      </PercentInput>
      <PercentInput percent={friendPercent} setPercent={setFriendPercent}>
        How did your friend the service?
      </PercentInput>
      <TotalBill bill={bill} tip={tip} handleReset={handleReset} />
    </>
  );
}
