export default function InfoItem({ emoji, children }) {
  return (
    <p>
      <span>{emoji}</span>
      <span>{children}</span>
    </p>
  );
}
