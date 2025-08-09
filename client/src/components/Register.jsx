import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';
import { RegisterForm } from './RegisterForm';

import image from './login_hero.jpg'; // Reusing the same image

export default function Register({ onRegister }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:8080/auth/register', {
        name,
        email,
        password
      });
      onRegister(res.data.user);
    } catch {
      alert('Registration failed');
    }
  };

  return (
    <div className="login-grid">
      <div className="login-left">
        <div className="form-wrapper">
          <div className="form-container">
            <RegisterForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              onSubmit={handleRegister}
            />
          </div>
        </div>
      </div>

      <div className="login-right">
        <img src={image} alt="Image" className="login-image" />
      </div>
    </div>
  );
}
