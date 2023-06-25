import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operation";


export default function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
     const form = e.currentTarget;
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" onChange={handleEmailChange} />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}