import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack, IoMailOpen } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

import "../styles/Register.css";
import bbc_white_logo from "../images/bbc_white_logo.png";
import CustomInput from "../components/login/CustomInput";
import { createFirebaseUser, loginFirebaseUser } from "../api/userAuthActions";
import emailValidate from "../customFunctions/emailValidate";

function Register() {
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
  // const [showPassword, setShowPassword] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const [showEmailVerificationPage, setShowEmailVerificationPage] =
    useState(false);

  const checkingEmail = (email) => {
    console.log("checkingEmail email:", email);
    if (!emailValidate(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const checkPasswordIsValid = () => {
    console.log("emailError:", emailError);
    console.log("passwordValidate:", passwordValidate);
    if (
      passwordValidate.eightCharacter &&
      passwordValidate.letter &&
      passwordValidate.symbolOrNumber
    ) {
      console.log("valid password");
      setPasswordError(false);
      return true;
    }
    setPasswordError(true);
    return false;
  };
  const createUser = async () => {
    try {
      const userCredential = await createFirebaseUser(
        inputEmail,
        inputPassword
      );
      //show email verification page
      setShowEmailVerificationPage(true);
      setShowPasswordPage(false);
      console.log("userCredential:", userCredential);
    } catch (error) {
      console.log("create error:", error);
      alert(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (showPasswordPage) {
      console.log("submit button clicked for validate password");

      if (checkPasswordIsValid()) {
        console.log("submit password is valid");
        try {
          setShowPasswordError(false);
          createUser();
        } catch (error) {
          alert(error);
        }
      } else {
        setShowPasswordError(true);
        console.log("submit button click password invalid");
      }
    } else {
      console.log("submit button clicked for validate email");

      checkingEmail();
      if (!emailError && inputEmail) {
        setShowPasswordPage(true);
        // setShowPasswordError(false);
        console.log("submit button clicked");
      }
    }
  };

  useEffect(() => {
    if (showPasswordPage) {
      setEmailError(false);
    }
  }, [showPasswordPage]);

  const checkingPassword = (password) => {
    console.log("checkingPassword");
    console.log("inputPassword:", password);
    if (password.match(/[A-Za-z]/)) {
      console.log("uppercase matched");
      setPasswordValidate((prev) => ({
        ...prev,
        letter: true,
      }));
    } else {
      console.log("upparcase not matched");
      setPasswordValidate((prev) => ({
        ...prev,
        letter: false,
      }));
    }

    if (
      password.match(/[0-9]/) ||
      password.match(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).*$/)
    ) {
      console.log("number or symbol matched");
      setPasswordValidate((prev) => ({
        ...prev,
        symbolOrNumber: true,
      }));
    } else {
      console.log("number not matched");

      setPasswordValidate((prev) => ({
        ...prev,
        symbolOrNumber: false,
      }));
    }

    if (password.length >= 8) {
      console.log("length matched");
      setPasswordValidate((prev) => ({
        ...prev,
        eightCharacter: true,
      }));
    } else {
      console.log("length not matched");

      setPasswordValidate((prev) => ({
        ...prev,
        eightCharacter: false,
      }));
    }
    // return checkPasswordIsValid();
  };

  useEffect(() => {
    console.log("password useeffect");
    if (inputPassword) {
      checkingPassword(inputPassword);
    }
  }, [inputPassword]);

  useEffect(() => {
    inputEmail && checkingEmail(inputEmail);
  }, [inputEmail]);

  useEffect(() => {
    if (checkPasswordIsValid()) {
      setShowPasswordError(false);
      console.log("checkPasswordIsValid use effect");
    }
  }, [passwordValidate]);

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
      <img src={bbc_white_logo} className="logo" />

      <form className="registrationDetails">
        <h2>
          {showPasswordPage
            ? "Create your account password"
            : showEmailVerificationPage
            ? "Your account has been created"
            : "Register for a BBC account"}
        </h2>
        {showEmailVerificationPage && (
          <div className="email-verification-container">
            <p>Check your email to verify your account</p>
            <IoMailOpen size={250} />
            <Link to="/signin" className="signin-link">
              <button type="button" className="continueBtn">
                Sign in
              </button>
            </Link>
          </div>
        )}
        {!showPasswordPage && !showEmailVerificationPage && (
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
              inputType="password"
              inputValue={inputPassword}
              inputPlacholder="Password"
              onChangeInputHandler={(e) => {
                console.log("password onChangeInputHandler");
                setInputPassword(e.target.value);
                console.log("input password:", inputPassword);

                // checkingPassword(e.target.value);
              }}
              showError={showPasswordError}
              errorText={
                <span>
                  Sorry, that password doesn’t look right.
                  <br /> Please enter a password that meets the requirements
                  above.
                </span>
              }
            />
          ) : (
            !showEmailVerificationPage && (
              <CustomInput
                isSuccess={inputEmail && !emailError}
                inputType="email"
                inputValue={inputEmail}
                inputPlacholder="Email"
                onChangeInputHandler={(e) => {
                  setInputEmail(e.target.value);
                  console.log("input email:", inputEmail);
                  // checkingEmail(e.target.value);
                }}
                showError={emailError}
                errorText={
                  "Sorry, that email doesn’t look right. Please check it's a proper email."
                }
              />
            )
          )}

          {/* {emailError && (
            <span className="email-error">
              Sorry, that email doesn’t look right. Please check it's a proper
              email.
            </span>
          )} */}
          {/* {showPasswordError && (
            <span className="email-error">
              Sorry, that password doesn’t look right.
              <br /> Please enter a password that meets the requirements above.
            </span>
          )} */}
        </div>
        {/* {showPasswordPage && (
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
        )} */}

        {!showEmailVerificationPage && (
          <>
            <button
              type="submit"
              className="continueBtn"
              onClick={submitHandler}
            >
              {showPasswordPage ? "Send Verification Email" : "Continue"}
            </button>

            <p>
              Already have a BBC account?{" "}
              <Link to="/signin">
                <span className="signin-btn">Sign in</span>
              </Link>{" "}
              now
            </p>
          </>
        )}
      </form>
    </div>
  );
}

export default Register;
