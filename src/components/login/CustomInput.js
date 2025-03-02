import { useEffect, useState } from "react";
import { MdDone } from "react-icons/md";

import "../../styles/CustomInput.css";

function CustomInput({
  isSuccess,
  inputType,
  inputValue,
  onChangeInputHandler,
  inputPlacholder,
  showError,
  errorText,
}) {
  const [inputTypeState, setInputType] = useState(inputType);
  useEffect(() => {
    setInputType(inputType);
  }, [inputType]);

  return (
    <div className={isSuccess ? "user-input-wrp success" : "user-input-wrp"}>
      <div className="label-container">
        <span
          className={inputValue ? "floating-label has-value" : "floating-label"}
        >
          {inputPlacholder}
        </span>
      </div>
      <div className="input-container">
        <input
          className="input-text"
          required
          type={inputTypeState}
          value={inputValue}
          onChange={onChangeInputHandler}
        />
        {isSuccess && <MdDone className="done-icon" />}
      </div>
      {showError && (
        <div>
          <span className="error-text">{errorText}</span>
        </div>
      )}
      {inputType === "password" && (
        <div>
          <button
            className="show-password-button"
            onClick={() => {
              const type = inputTypeState === "password" ? "text" : "password";
              setInputType(type);
            }}
            type="button"
          >
            {inputTypeState === "password" ? "Show password" : "Hide password"}
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomInput;
