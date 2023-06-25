import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/operation";
import React from 'react';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleNameChange = e => {
      setName(e.target.value);
    };
    const handleEmailChange = e => {
      setEmail(e.target.value);
    };
    const handlePasswordChange = e => {
      setPassword(e.target.value);
     
    };
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
  
      form.reset();
    };
  
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" onChange={handleNameChange} />
        </label>
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
        <button type="submit">Register</button>
      </form>
    );
  };