import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Register from "../src/pages/Register.js";
import NoPage from "./pages/NoPage.js";
import Layout from "./components/Layout.js";
import Test from "../src/api/test.js";
import SignIn from "./pages/SignIn.js";

import { UserContext } from "./api/Context.js";

function App() {
  const [loggedUserCredentials, setLoggedUserCredentials] = useState();

  // console.log("loggedUserCredentials:", loggedUserCredentials);
  console.log('app.js')

  return (
    <UserContext.Provider value={loggedUserCredentials}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={<Layout loggedUserCredentials={loggedUserCredentials} />}
            />

            <Route path="register" element={<Register />} />
            <Route
              path="signin"
              element={
                <SignIn setLoggedUserCredentials={setLoggedUserCredentials} />
              }
            />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    //   <><h1>test</h1>
    //   <CustomInput  isSuccess='true'
    // inputType='email'
    // inputPlacholder='Email'/><h1>test2</h1></>
  );
}

export default App;
