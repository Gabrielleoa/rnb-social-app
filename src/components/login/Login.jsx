import './login.css'
import React, { useState } from "react";
import axios from 'axios';
import { Formik, Form, Field, errorMessage } from 'formik';



export default function Login() {
    const [formData, setFormData] = useState({
        username:'',
        password:''
    });

    const [errorMessage, setErrorMessage]= useState('');

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/api/login', formData);
            const token = response.data.token;
            localStorage.setItem('token', token);
            window.location.href = '/';
        } catch (error) {
            setErrorMessage('Invalid username or password');
        }
        }
        return (
            <div className='login'>
                <div className="loginWrapper"> 
                <div className="loginLeft">
                    <h3 className="loginLogo">Heavensocial</h3>
                    <span className="loginDesc">
                        Share your thoughts on your favorite songs and artists.🎶
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <form onSubmit={handleSubmit}> 
                        <input type='text' placeholder="Email or username" className="loginInput" value={formData.username} onChange={handleChange}/>
                        <input type ='password' placeholder='Password' className='loginInput' value={formData.password} onChange={handleChange}/> 
                        <button type="submit" className='loginButton'>Log In</button>
                        {errorMessage && <p>{errorMessage}</p>}
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">Create a New Account</button>
                        </form>
                    </div>
                </div>
                </div>
              
            </div>
          )
    }


