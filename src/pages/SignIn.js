import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";


import "../styles/Register.css";
import bbc_white_logo from "../images/bbc_white_logo.png";

function SignIn() {
  return (
    <div className="registration scroll-container">
      <img src={bbc_white_logo} className="logo" />
      <Link to="/">
        <button className="close-button">
          <FaTimes size={25} />
        </button>
      </Link>
    </div>
  );
}

export default SignIn;
