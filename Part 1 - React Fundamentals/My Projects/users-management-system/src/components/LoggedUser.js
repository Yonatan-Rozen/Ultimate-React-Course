export default function LoggedUser({
  user,
  selectedLoggedUser,
  onClick,
  onEditUser,
  children,
}) {
  const isSelected = selectedLoggedUser?.email === user.email;

  return (
    <>
      <label>{user.name}</label>
      <label>{user.email}</label>
      <label>{user.pass}</label>
      <button onClick={() => onClick(user.email)}>{children}</button>
      <button onClick={() => onEditUser(user)}>
        {isSelected ? "close" : "edit"}
      </button>
    </>
  );
}
