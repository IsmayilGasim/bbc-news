import { MdDone } from "react-icons/md";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import "../styles/Register.css";
import bbc_white_logo from "../images/bbc_white_logo.png";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

function Register() {
  const navigate = useNavigate();
  const pageLocation = useLocation();
  console.log("pageLocation:",pageLocation)

  const [inputEmail, setInputEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showPasswordPage, setShowPasswordPage] = useState(false);

  const [inputPassword, setInputPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  console.log("inputEmail:", inputEmail, " inputPassword:", inputPassword);

  const emailValidate = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };
  const checkingEmail = () => {
    if (!emailValidate(inputEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    checkingEmail();
    if (!emailError && inputEmail) {
      setShowPasswordPage(true);
      console.log("submit button clicked");
    }
  };

  useEffect(()=>{
    if(showPasswordPage){
      // navigate(`${pageLocation.pathname}/password`);
      // pageLocation.pathname = '/test'
    }

  },[showPasswordPage]);

  return (
    <div className="registration scroll-container">
      <Link to="/">
        <button className="close-button">
          <FaTimes size={25} />
        </button>
      </Link>
      {/* <Outlet /> */}
      <img src={bbc_white_logo} />

      <form className="registrationDetails">
        <h2>
          {showPasswordPage
            ? "Create your account password"
            : "Register for a BBC account"}
        </h2>
        {!showPasswordPage && (
          <p>You must be 16 or over to register for a BBC account</p>
        )}
        {showPasswordPage && (
          <div>
            Passwords need to include...
            <ul>
              <li>At least eight characters</li>
              <li>At least one letter</li>
              <li>At least one number or symbol</li>
            </ul>
          </div>
        )}
        <div className="user-input-wrp">
          <br />
          {showPasswordPage ? (
            <input
              type="password"
              required
              className={
                inputPassword
                  ? !passwordError
                    ? "filled inputPassword success"
                    : "filled inputPassword"
                  : "inputPassword"
              }
              value={inputPassword}
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
            />
          ) : (
            <input
              type="email"
              className={
                inputEmail
                  ? !emailError
                    ? "filled inputText success"
                    : "filled inputText"
                  : "inputText"
              }
              required
              value={inputEmail}
              onChange={(e) => {
                setInputEmail(e.target.value);
                checkingEmail();
              }}
            />
          )}
          {((inputEmail && !emailError) ||
            (inputPassword && !passwordError)) && (
            <MdDone
              color="green"
              size={30}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-500"
            />
          )}

          <span className="floating-label">
            {showPasswordPage ? "Password" : "Email"}
          </span>
          {emailError && (
            <span className="email-error">
              Sorry, that email doesn’t look right. Please check it's a proper
              email.
            </span>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <button type="submit" className="continueBtn" onClick={submitHandler}>
          Continue
        </button>
        <p>
          Already have a BBC account? <a>Sign in now</a>
        </p>
      </form>
    </div>
  );
}

export default Register;
