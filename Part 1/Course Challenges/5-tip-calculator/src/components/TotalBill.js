export default function TotalBill({ bill, tip, handleReset }) {
  const totalBill = bill + tip;
  return (
    <>
      {bill > 0 && (
        <>
          <h3>
            You pay ${totalBill} (${bill} + ${tip} tip)
          </h3>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
    </>
  );
}
