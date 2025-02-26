import { MdDone } from "react-icons/md";

import "../../styles/CustomInput.css";

function CustomInput({
  isSuccess,
  inputType,
  inputValue,
  onChangeInputHandler,
  inputPlacholder
}) {
  return (
    <div className={isSuccess ? "user-input-wrp success" : "user-input-wrp"}>
      <div className="label-container">      <span className={inputValue ? "floating-label has-value"  : "floating-label"}>{inputPlacholder}</span>
      </div>
      <div className="input-container">
      <input
        className="input-text"
        required
        type={inputType}
        value={inputValue}
        onChange={onChangeInputHandler}
      />
      {isSuccess && <MdDone className="done-icon" />}
      </div>
    </div>
  );
}

export default CustomInput;
