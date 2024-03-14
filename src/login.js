import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorSmg ,setError] = useState("") ;
  const History = useNavigate()
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
   if (username === "Sample" && password === "Sample@123"){
      History("/home")
      setError("")
   }
   else {
   setError("invaid credentials")
   History("/")
    }
  };

  return (
    <div className='login-form-container'>
        <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="block">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder='Sample'
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Sample@123'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
        <p className='warning'>{errorSmg}</p>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
