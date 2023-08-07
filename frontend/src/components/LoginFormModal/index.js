import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();
  const demoUser = (e) => {
    e.preventDefault();
   dispatch(sessionActions.login({credential: 'demouser', password: 'password'})).then(closeModal);
 }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
    <div className="login">
      <h1>Log In</h1>
      <form className='loginForm' onSubmit={handleSubmit}>
          Username or email
          <input
          className="logInInputBox"
            placeHolder='Username or Email'
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
          Password
          <input
          className="logInInputBox2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        {errors.credential && (
          <div>{errors.credential}</div>
        )}
        <div >
        <button disabled={credential.length < 4 || password.length < 6} className='loginButton' type="submit">Log In</button>
        <p onClick={demoUser} className="demoUser">Demo User</p>
        </div>
      </form>
      </div>
    </>
  );
}

export default LoginFormModal;
