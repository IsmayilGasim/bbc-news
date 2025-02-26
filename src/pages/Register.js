import { useEffect, useState } from "react";

import { MdDone } from "react-icons/md";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { Button } from "react-bootstrap";

import "../styles/Register.css";
import bbc_white_logo from "../images/bbc_white_logo.png";
import CustomInput from "../components/login/CustomInput";

function Register() {
  const navigate = useNavigate();
  const pageLocation = useLocation();
  console.log("pageLocation:", pageLocation);

  const [inputEmail, setInputEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPasswordPage, setShowPasswordPage] = useState(false);

  const [inputPassword, setInputPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState({
    letter: false,
    eightCharacter: false,
    symbolOrNumber: false,
  });
  const [showPassword, setShowPassword] = useState(false);

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

  useEffect(() => {
    if (showPasswordPage) {
      // navigate(`${pageLocation.pathname}/password`, { replace: true });
      // pageLocation.pathname = '/test'
    }
  }, [showPasswordPage]);

  const checkingPassword = () => {
    if (inputPassword.match(/[A-Za-z]/)) {
      console.log("uppercase matched");
      setPasswordValidate((prev) => ({
        ...prev,
        letter: true,
      }));
    } else {
      setPasswordValidate((prev) => ({
        ...prev,
        letter: false,
      }));
    }

    if (
      inputPassword.match(/[0-9]/) ||
      inputPassword.match(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)
    ) {
      console.log("number or symbol matched");
      setPasswordValidate((prev) => ({
        ...prev,
        symbolOrNumber: true,
      }));
    } else {
      setPasswordValidate((prev) => ({
        ...prev,
        symbolOrNumber: false,
      }));
    }

    if (inputPassword.length >= 8) {
      console.log("length matched");
      setPasswordValidate((prev) => ({
        ...prev,
        eightCharacter: true,
      }));
    } else {
      setPasswordValidate((prev) => ({
        ...prev,
        eightCharacter: false,
      }));
    }
    checkPasswordIsValid();
  };

  const checkPasswordIsValid = () => {
    if(passwordValidate.eightCharacter &&
      passwordValidate.letter &&
      passwordValidate.symbolOrNumber){
        console.log('valid password')
        setPasswordError(false);

        return true;
      }
      setPasswordError(true);
      return false;
  };

  useEffect(() => {
    checkingPassword();
  }, [inputPassword]);

  return (
    <div className="registration scroll-container">
      {showPasswordPage && (
        <button
          className="back-button"
          onClick={() => {
            setShowPasswordPage(false);
          }}
        >
          <IoChevronBack /> Back
        </button>
      )}
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
            <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
              <li
                style={{
                  color: passwordValidate.eightCharacter ? "#1ecc00" : "white", // Correct!
                }}
              >
                {passwordValidate.eightCharacter ? "✓" : "•"} At least eight
                characters
              </li>
              <li
                style={{ color: passwordValidate.letter ? "#1ecc00" : "white" }}
              >
                {passwordValidate.letter ? "✓" : "•"} At least one letter
              </li>
              <li
                style={{
                  color: passwordValidate.symbolOrNumber ? "#1ecc00" : "white",
                }}
              >
                {passwordValidate.symbolOrNumber ? "✓" : "•"} At least one
                number or symbol
              </li>
            </ul>
          </div>
        )}
        <div>
          <br />
          {showPasswordPage ? (
            <CustomInput
              isSuccess={inputPassword && !passwordError}
              inputType={showPassword ? "text" : "password"}
              inputValue={inputPassword}
              inputPlacholder="Password"
              onChangeInputHandler={(e) => {
                setInputPassword(e.target.value);
              }}
            />
          ) : (
            <CustomInput
              isSuccess={inputEmail && !emailError}
              inputType="email"
              inputValue={inputEmail}
              inputPlacholder="Email"
              onChangeInputHandler={(e) => {
                setInputEmail(e.target.value);
                checkingEmail();
              }}
            />
          )}

          {emailError && (
            <span className="email-error">
              Sorry, that email doesn’t look right. Please check it's a proper
              email.
            </span>
          )}
        </div>
        {showPasswordPage && (
          <div>
            {" "}
            <button
              className="show-password-button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              type="button"
            >
              {showPassword ? "Hide password" : "Show password"}
            </button>
          </div>
        )}
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
