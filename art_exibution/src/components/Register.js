import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './form.css'

const registerUrl='https://47ei87a609.execute-api.ap-south-1.amazonaws.com/production/register'


const Register = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if (username.trim() === ''  || email.trim() === '' || name.trim() === '' || password.trim() === ''){
            setMessage('All fields are required');
            return;
        }
        setMessage(null);
        
        const requestConfig = {
            Headers : {
                'x-api-key' : 'eKHDyuG6Rv413MJod4rIk8t0B5WL13LY7O0UdXNe' 
            }
        }

        const requestBody = {
            username: username,
            email : email,
            name : name ,
            password : password
        }

        axios.post(registerUrl, requestBody, requestConfig).then( response => {
            setMessage("Registration successful!")
        }).catch(error => {
            if (error.response.status === 401 || error.response.status === 403){
                setMessage(error.response.data.message);
            } else {
                setMessage("Sorry ....backend server is down!! Please try again")
            }
        })

    }
    return (
        <div className="register-container">
            <form onSubmit={submitHandler} className='register-form'>
                <h5>Register</h5>
                name: <input type="text" value={name} onChange={event => setName(event.target.value)}/> <br/>
                email: <input type="text" value={email} onChange={event => setEmail(event.target.value)}/> <br/>
                username: <input type="text" value={username} onChange={event => setUsername(event.target.value)}/> <br/>
                password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
                <input type="submit" value="register" />
                <div>
                    <ul>
                        <li>
                            Already an account?<Link to="/Login" className="nav-link text-black">Login</Link>
                        </li>
                    </ul>
                </div>
                {message && <p className='message'>{message}</p>}
            </form>
        </div>
    )
}

export default Register;