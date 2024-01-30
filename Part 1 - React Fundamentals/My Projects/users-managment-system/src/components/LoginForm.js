import { useState } from "react";
import Checkbox from "./Checkbox";

export default function LoginForm({ onAddNewLoggedUser, onDisplayForm }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [checked, setChecked] = useState(false);

  function handleChange() {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !pass) return;

    const newLoggedUser = { email, pass };

    onAddNewLoggedUser(newLoggedUser);

    setEmail("");
    setPass("");
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="header">Login Form</h1>
      <div className="flexbox">
        <input
          type="email"
          placeholder="✉️Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="🔒Enter your password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Checkbox value={checked} onChange={handleChange}>
          Remember me
        </Checkbox>
        <button type="submit">Login Now</button>
      </div>
      <p>Don't have an acount?</p>
      <button
        type="button"
        className="btn-link"
        onClick={() => onDisplayForm("registration")}
      >
        Registration
      </button>
    </form>
  );
}
