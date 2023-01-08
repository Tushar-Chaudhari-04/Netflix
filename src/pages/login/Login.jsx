import React, { useState, useRef } from "react";
import "./Login.scss";
import netflixImg from "../../images/Netflix Logo.png";

export const Login = () => {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="netflixLogo" src={netflixImg} alt="Netflix Logo" />
        </div>
      </div>

      <div className="container">
        <form>
          <h1>Sign In </h1>
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Enter Password" />
          <button>Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you are not a
            bot.Learn More.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
