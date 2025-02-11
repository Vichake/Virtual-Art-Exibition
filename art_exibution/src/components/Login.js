import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { setUserSession } from '../service/AuthService';
import { useNavigate } from 'react-router-dom';
import './form.css'

const loginAPIUrl = 'https://47ei87a609.execute-api.ap-south-1.amazonaws.com/production/login';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate(); 

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Both username and password are required');
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        'x-api-key': 'eKHDyuG6Rv413MJod4rIk8t0B5WL13LY7O0UdXNe'
      }
    }
    const requestBody = {
      username: username,
      password: password
    }

    axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
      setUserSession(response.data.user, response.data.token);
      navigate('/premium-content');  
    }).catch((error) => {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('Sorry....the backend server is down. Please try again later!!');
      }
    })
  }

  return (
    <div className='register-container'>
      <form onSubmit={submitHandler} className='register-form'>
        <h5>Login</h5>
        Username: <input type="text" value={username} onChange={event => setUsername(event.target.value)} /> <br />
        Password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br />
        <input type="submit" value="Login" />
        <div>
            <ul>
               <li>
                    Don't have Account?<Link to="/Register" className="nav-link text-black">Register</Link>
               </li>
            </ul>
        </div>
        {errorMessage && <p className="message">{errorMessage}</p>}
      </form>
    </div>
    
  )
}

export default Login;