import { useState } from "react";
import Checkbox from "./Checkbox";

export default function RegistrationForm({
  name,
  setName,
  pass,
  setPass,
  onAddUser,
  onDisplayForm,
}) {
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [accept, setAccept] = useState(false);

  function handleChange() {
    setAccept(!accept);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !pass || !confirmPass || !accept) return;
    if (pass !== confirmPass) return;

    const newUser = { name, email, pass };

    onAddUser(newUser);
  }

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h1 className="header">Registration Form</h1>
      <div className="flexbox">
        <input
          type="text"
          placeholder="👤Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="✉️Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔒Create a password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔒Confirm password"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        <Checkbox value={accept} onChange={handleChange}>
          Accept terms & conditions
        </Checkbox>

        <button type="submit">Register Now</button>
      </div>
      <p>Already have an acount?</p>
      <button
        type="button"
        className="btn-link"
        onClick={() => onDisplayForm("login")}
      >
        Sign in
      </button>
    </form>
  );
}
