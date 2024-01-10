import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from '../api';
import { LoadingComp } from './LoadingComp';
import ara from "../asset/ara.jpg"

export const LoginForm = () => {
  // State to manage form input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(username,password)

    if(result.access_token) {
      localStorage.setItem('token', result.access_token)
      localStorage.setItem('username', result.username)
      localStorage.setItem("role",result.role)
    }

    if(result.role === "user") navigate('/userhomepage')
    
    if(result.role === "admin") navigate('/adminhomepage')
  };

  if(loading) return <LoadingComp />

  const fullBackgroundStyle = {
    backgroundImage: `url(${ara})`, // Replace with the path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to 100% of the viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

  return (
    <div className="" style={fullBackgroundStyle}>
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

