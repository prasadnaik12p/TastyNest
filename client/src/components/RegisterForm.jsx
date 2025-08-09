import React from 'react';
import "./css/RegisterForm.css"

export function RegisterForm({ name, setName, email, setEmail, password, setPassword, onSubmit }) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
      <div className="header">
        <h1 className="title">Create Account</h1>
        <p className="subtitle">
          Enter your email below to register your account
        </p>
      </div>
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
}
