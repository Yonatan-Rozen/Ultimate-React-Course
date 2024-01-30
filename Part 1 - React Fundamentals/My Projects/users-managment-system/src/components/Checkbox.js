export default function Checkbox({ children, value, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {children}
    </label>
  );
}
