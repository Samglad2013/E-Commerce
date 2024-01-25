import React from "react";
import "./CSS/Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <div className="login-container">
          <h1>Sign Up</h1>
          <div className="form-info">
            <input type="text" placeholder="Your name" />
            <br></br>
            <input type="email" placeholder="Your email" />
            <br></br>
            <input type="password" placeholder="Your password" />
          </div>
          <button>Continue</button>
          <div className="login-text">
            <p>
              Already have an account? <span>Login Here</span>
            </p>
          </div>
          <div className="login-agreement">
            <input type="checkbox" />
            <p>By continuing i agree to the terms and user policy privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
