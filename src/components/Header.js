import { useState, useRef, useContext } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import logo from "../images/logo.svg";
import RegisterButton from "./login/RegisterButton";
import SignIn from "./login/SignIn";
import SideNavBar from "./menu/SideNavBar";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../api/Context";
import YourAccountButton from "./login/YourAccountButton";
function Header({ articleTopics }) {
  console.log('HEADER.JS');
  const [showNavBar, setShowNavBar] = useState(false);
  const searchRef = useRef(null);
  const user = useContext(UserContext);
  console.log("userContext:", user);


  const logoPath = "../";
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            <Col lg={3}>
              <SideNavBar
                articleTopics={articleTopics}
                showNavBar={showNavBar}
                closeBtnClickHandler={() => setShowNavBar(false)}
                openSideNavBarHandler={() => setShowNavBar(true)}
                searchRef={searchRef}
              />
            </Col>
            <Col lg={9}>
              <i
                className="bi bi-search"
                style={{ fontSize: "23px", color: "black", margin: "0px" }}
                onClick={() => {
                  searchRef.current?.focus();

                  setShowNavBar(true);
                  return true;
                }}
              ></i>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Image src={logo} style={{ width: "80px", height: "40px" }}></Image>
        </Col>
        <Col className="d-flex justify-content-end p-0 m-0">
          {user?.user ? (
            <>
              <Link >
                <YourAccountButton />
              </Link>
            </>
          ) : (
            <>
              <Link to="register">
                <RegisterButton />
              </Link>
              <Link to="signin">
                <SignIn />
              </Link>
            </>
          )}
        </Col>
      </Row>
      <Outlet />
    </Container>
  );
}

export default Header;
