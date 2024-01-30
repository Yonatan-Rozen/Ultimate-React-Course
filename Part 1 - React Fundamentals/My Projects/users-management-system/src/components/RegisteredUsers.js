import RegisteredUser from "./RegisteredUser";

export default function RegisteredUsers({ users, onDeleteUser }) {
  return (
    <div className="registered-users">
      <h1>Registered Users</h1>
      <div className="registered-users-grid">
        <label>Name</label>
        <label>Email</label>
        <label>Password</label>
        <div></div>
        {users.map((user) => (
          <RegisteredUser
            name={user.name}
            email={user.email}
            pass={user.pass}
            onClick={onDeleteUser}
            key={user.email}
          >
            Delete
          </RegisteredUser>
        ))}
      </div>
    </div>
  );
}
