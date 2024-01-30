import LoggedUser from "./LoggedUser";

export default function LoggedUsers({
  loggedUsers,
  onUserLogout,
  onEditUser,
  selectedLoggedUser,
}) {
  return (
    <div className="logged-users">
      <h1>Logged Users</h1>
      <div className="logged-users-grid">
        <label>Name</label>
        <label>Email</label>
        <label>Password</label>
        <div></div>
        <div></div>
        {loggedUsers.map((user) => (
          <LoggedUser
            user={user}
            selectedLoggedUser={selectedLoggedUser}
            onClick={onUserLogout}
            key={user.email}
            onEditUser={onEditUser}
          >
            Logout
          </LoggedUser>
        ))}
      </div>
    </div>
  );
}
