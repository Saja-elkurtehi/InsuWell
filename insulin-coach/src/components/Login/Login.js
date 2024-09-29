import React from 'react';
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="login-wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="login-input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className='icon' />
                </div>
                <div className="login-input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <label> <input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <Link to="/about">
                    <button type="button">Login</button>
                </Link>
                <div className="register-link">
                <p>
                Don't have an account? <Link to="/sign-up">Sign Up</Link>
                </p>
                </div>
            </form>
        </div>
    );
}

export default Login;
