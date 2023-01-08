import React, { useState, useRef } from "react";
import "./Register.scss";
import netflixImg from "../../images/Netflix Logo.png";
import netflixBGImg from "../../images/Register BG.jpg";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const onStart = () => {
    setEmail(emailRef.current.value);
    console.log(email);
  };

  const onFinish = () => {
    setPassword(passwordRef.current.value);
    console.log(password);
  };

  return (
    <div className="register">
      <div className="registerPage1">
        <img className="netflixBG" src={netflixBGImg} alt="netflixBG" />
        <div className="register-mainInfo">
          <div className="top">
            <img src={netflixImg} alt="Netflix Logo" />

            <select className="langSelect">
              <LanguageSharpIcon />
              <option defaultValue={true}>English</option>
              <option>हिन्दी</option>
              <ArrowDropDownIcon />
            </select>

            <button className="signIn">Sign In</button>
          </div>
          <div className="para-data">
            <h1 className="para1">Unlimited movies, TV shows and more.</h1>
            <p className="para2">Watch anywhere. Cancel anytime.</p>
            <p className="para3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
          </div>
          {!email ? (
            <div className="emailForm">
              <input
                type="email"
                className="emailArea"
                placeholder="Email address"
                ref={emailRef}
              />
              <button className="getStarted" onClick={onStart}> 
                <span>Get Started</span>
                <ArrowForwardIosSharpIcon />
              </button>
            </div>
          ) : (
            <form className="emailForm">
              <input
                type="password"
                className="emailArea"
                placeholder="Password"
                ref={passwordRef}
              />
              <button className="getStarted" onClick={onFinish}>
                <span>Finish</span>
                <ArrowForwardIosSharpIcon />
              </button>
            </form>
          )}
        </div>
      </div>
      {/* <hr />
      <div className="registerPage2">
        <div className="Page2-left">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="Page2-right">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <hr /> */}
    </div>
  );
};

export default Register;