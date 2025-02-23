import "../styles/Register.css";
import bbc_white_logo from "../images/bbc_white_logo.png";
function Register() {
  return (
    <div className="registration">
      <div className="registrationDetails">
        <img src={bbc_white_logo} />
        <h1>Register for a BBC account</h1>
        <p>You must be 16 or over to register for a BBC account</p>
        <div class="user-input-wrp">
          <br />
          <input type="text" class="inputText" required />
          <span class="floating-label">Email</span>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <button className="continueBtn">Continue</button>
          <p>Already have a BBC account? <a>Sign in now</a></p>
        
      </div>
    </div>
  );
}

export default Register;
