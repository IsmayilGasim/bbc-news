import { useState } from "react";

import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import "../styles/Register.css";
import bbc_white_logo from "../images/bbc_white_logo.png";
import CustomInput from "../components/login/CustomInput";
import emailValidate from "../customFunctions/emailValidate";
import passwordValidate from "../customFunctions/passwordValidate";

function SignIn() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [emailIsSuccess, setEmailIsSuccess] = useState(false);
  const [passwordIsSuccess, setPasswordIsSuccess] = useState(false);

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const loginClickHandler = (e) => {
    e.preventDefault();
    setShowEmailError(!emailIsSuccess);
    setShowPasswordError(!passwordIsSuccess);
  };

  return (
    <div className="registration scroll-container">
      <img src={bbc_white_logo} className="logo" />
      <Link to="/">
        <button className="close-button">
          <FaTimes size={25} />
        </button>
      </Link>
      <form className="registrationDetails">
        <CustomInput
          isSuccess={emailIsSuccess}
          inputType="email"
          inputValue={inputEmail}
          inputPlacholder="Email"
          onChangeInputHandler={(e) => {
            setInputEmail(e.target.value);
            setEmailIsSuccess(emailValidate(e.target.value));
            setShowEmailError(false);
          }}
          showError={showEmailError}
          errorText={
            "Sorry, that email doesn’t look right. Please check it's a proper email."
          }
        />
        <CustomInput
          isSuccess={passwordIsSuccess}
          inputType="password"
          inputValue={inputPassword}
          inputPlacholder="Password"
          onChangeInputHandler={(e) => {
            setInputPassword(e.target.value);
            setPasswordIsSuccess(passwordValidate(e.target.value));
            setShowPasswordError(false);
          }}
          showError={showPasswordError}
          errorText={
            <span>Sorry, that password doesn’t look right.<br /> Please enter a password that meets the requirements above.</span>
          }
        />
        <button
          className="continueBtn"
          onClick={loginClickHandler}
          type="submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default SignIn;
