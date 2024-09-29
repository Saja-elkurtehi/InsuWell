import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [age, setAge] = useState(25);

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    };

    return (
<div className="signup-body">
        <div className="signup-wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <div className="form-row">
                    <div className="input-box half-width">
                        <input type="text" placeholder=" First Name" required />
                    </div>
                    <div className="input-box half-width">
                        <input type="email" placeholder="Last Name" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-box half-width">
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div className="input-box half-width">
                        <input type="text" placeholder="Username" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="input-box half-width">
                        <input type="password" placeholder=" Password" required />
                    </div>
                    <div className="input-box half-width">
                        <input type="password" placeholder="Confirm Password" required />
                    </div>
                </div>
                <div className="input-box half-width">
                        <label htmlFor="age">Age: {age}</label>
                        <input
                            type="range"
                            id="age"
                            name="age"
                            min="0"
                            max="100"
                            value={age}
                            onChange={handleAgeChange}
                        />
                    </div>
                <div class="form-row">
                    <div class="gender-container">
                        <label for="gender">Gender</label>
                        <div class="gender-selection">
                            <input type="radio" id="male" name="gender" value="male"></input>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female"></input>
                            <label for="female">Female</label>
                            <input type="radio" id="other" name="gender" value="other"></input>
                            <label for="other">Other</label>
                        </div>
                    </div>
                </div>

                <div className="remember-forgot"></div>
                <Link to="/login">
                    <button type="button">Sign Up</button>
                </Link>

                <div className="register-link">
                    <p>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
        </div>
        
    );
};

export default SignUp;
