const passwordValidate = (password) => {
    let regexp = /^(?=.*[A-Za-z])(?=.*[\W\d])[A-Za-z\d\W]{8,}$/;
    return regexp.test(password);
  };

  export default passwordValidate;