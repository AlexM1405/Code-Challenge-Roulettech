import React, { useState } from 'react';
import "./Form.css"
import api from '../api.js';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constans.js';
import { useNavigate } from "react-router-dom";
import LoadingIndicator from "./LoadingIndicator";

function Form({route, method}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "SignUp";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    if (!username || !password) {
      alert('Username and password are required.');
      setLoading(false);
      return;
    }

    try {
      const res = await api.post(route, { username, password });
      
      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh); 
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };


  return (
    <section>
      <div className='Video-Container'>
        <video src="/Video sin título (1).mp4" autoPlay loop muted/>
      </div>

      <div className='Signup-Form'>
        <h1>{name} </h1>
        <p>{name} and enjoy the Luxury of Travel</p> 
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="username">Username:</label>
          <input
            id='username'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id='password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        <div>
        </div>
      </form>
      </div>
    </section>
  );
};


export default Form;