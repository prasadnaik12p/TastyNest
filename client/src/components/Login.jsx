import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css'
import { LoginForm } from './LoginForm';

import image from './login_hero.jpg'

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3000/auth/login', { email, password }, { withCredentials: true });
      onLogin(res.data.user);
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="login-grid">

      <div className="login-left">
        <div className="form-wrapper">
          <div className="form-container">
            <LoginForm
              email={email}
              password={password}
            />
          </div>
        </div>
      </div>

      <div className="login-right">
        <img src={image}
          alt="Image"
          className="login-image"
        />
      </div>
    </div>
  );
}
