const passwordValidate = (password) => {
    let regexp = /^(?=.*[A-Za-z])(?=.*[\W\d])[A-Za-z\d\W]{8,}$/;
    console.log("regexp.test(password):", regexp.test(password));
    return regexp.test(password);
  };

  export default passwordValidate;