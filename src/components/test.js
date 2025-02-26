import './test.css';
import { MdDone } from "react-icons/md";

function Test({
    isSuccess,
    inputType,
    inputValue,
    onChangeInputHandler,
    inputPlacholder
  }) {
  return (
    <div className={isSuccess ? "user-input-wrp success" : "user-input-wrp"}>
  <span className={inputValue ? "floating-label has-value" : "floating-label"}>
    {inputPlacholder}
  </span>
  <div className="input-wrapper">
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

  )
}

export default Test