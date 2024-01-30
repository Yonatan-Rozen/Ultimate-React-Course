import React, { useState } from "react";
import EditForm from "./EditForm";
import LoggedUsers from "./LoggedUsers";
import LoginForm from "./LoginForm";
import RegisteredUsers from "./RegisteredUsers";
import RegistrationForm from "./RegistrationForm";

const initialRegisteredUsers = [
  { name: "Yonatan", email: "yon969@gmail.com", pass: "123" },
  { name: "Rozen", email: "yon969@outlook.co.il", pass: "1!" },
  { name: "yonRoz", email: "roz@hotmail.com", pass: "1234" },
];
const initialLoggedUsers = [
  { name: "Yonatan", email: "yon969@gmail.com", pass: "123" },
  { name: "Rozen", email: "yon969@outlook.co.il", pass: "1!" },
];

function App() {
  const [users, setUsers] = useState(initialRegisteredUsers);
  const [loggedUsers, setLoggedUsers] = useState(initialLoggedUsers);
  const [form, setForm] = useState("registration");
  const [selectedLoggedUser, setSelectedLoggedUser] = useState(null);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleAddUser(newUser) {
    const isDuplicateEmail = users.some((user) => user.email === newUser.email);

    if (isDuplicateEmail) {
      console.log("Email is taken");
      return;
    }
    setUsers((users) => [...users, newUser]);
  }

  function handleDeleteUser(email) {
    setUsers(users.filter((user) => user.email !== email));
    handleUserLogout(email);
  }

  function handleDisplayForm(form) {
    setForm(form);
  }

  function handleAddLoggedUser(loggedUser) {
    const existingUser = users.find((user) => user.email === loggedUser.email);

    if (!existingUser || existingUser.pass !== loggedUser.pass) {
      console.log("Invalid email or password");
      return;
    }

    const isAlreadyLogged = loggedUsers.some(
      (user) => user.email === existingUser.email
    );

    if (isAlreadyLogged) {
      console.log("User is already logged in");
      return;
    }

    setLoggedUsers((loggedUsers) => [...loggedUsers, existingUser]);
  }

  function handleUserLogout(email) {
    setLoggedUsers(loggedUsers.filter((user) => user.email !== email));
  }

  function handleShowEdit(user) {
    setSelectedLoggedUser((curUser) => {
      return user.email === curUser?.email ? null : user;
    });
  }

  return (
    <div className="edit-container">
      <div className="container">
        {users.length > 0 && (
          <RegisteredUsers users={users} onDeleteUser={handleDeleteUser} />
        )}

        {form === "registration" ? (
          <RegistrationForm
            name={name}
            setName={setName}
            pass={pass}
            setPass={setPass}
            onAddUser={handleAddUser}
            onDisplayForm={handleDisplayForm}
          />
        ) : form === "login" ? (
          <LoginForm
            onAddNewLoggedUser={handleAddLoggedUser}
            onDisplayForm={handleDisplayForm}
          />
        ) : (
          ""
        )}

        {loggedUsers.length > 0 && (
          <LoggedUsers
            loggedUsers={loggedUsers}
            onUserLogout={handleUserLogout}
            onEditUser={handleShowEdit}
            selectedLoggedUser={selectedLoggedUser}
          />
        )}
      </div>
      {selectedLoggedUser && (
        <EditForm
          setName={setName}
          setPass={setPass}
          selectedLoggedUser={selectedLoggedUser}
        />
      )}
    </div>
  );
}
export default App;
