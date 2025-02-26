import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Register from "../src/pages/Register.js";
import NoPage from "./pages/NoPage.js";
import Layout from "./components/Layout.js";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout />} />

          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        {/* <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  //   <><h1>test</h1>
  //   <CustomInput  isSuccess='true'
  // inputType='email'
  // inputPlacholder='Email'/><h1>test2</h1></>
  );
}

export default App;
