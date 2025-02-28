import { useEffect, useState } from "react";
// import { auth } from "./firebase";

import {createFirebaseUser} from "./userAuthActions";
// import { createUserWithEmailAndPassword } from "firebase/auth";

function Test() {
  const [error, setError] = useState("");
  const email = "testwrtq75y@gmail.com";
  const password = "12345678";
  const [data, setCreateData] = useState();

  const handleRegister = async () => {
    try {
      const userCredential = await createFirebaseUser(email, password);
      setCreateData(userCredential);
    } catch (error) {
      setError(error);
    }
  };


  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log("User created:", userCredential.user);
  //   } catch (error) {
  //     console.error("Error creating user:", error.message);
  //     setError(error.message);
  //   }
  // };
  return <button onClick={handleRegister}>test</button>;
}

export default Test;
