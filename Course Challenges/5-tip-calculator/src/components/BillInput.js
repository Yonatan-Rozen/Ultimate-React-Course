export default function BillInput({ bill, setBill, children }) {
  return (
    <div>
      <span>{children}</span>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}
