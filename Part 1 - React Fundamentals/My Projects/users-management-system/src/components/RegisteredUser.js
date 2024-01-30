export default function RegisteredUser({
  name,
  email,
  pass,
  onClick,
  children,
}) {
  return (
    <>
      <label>{name}</label>
      <label>{email}</label>
      <label>{pass}</label>
      <button onClick={() => onClick(email)}>{children}</button>
    </>
  );
}
