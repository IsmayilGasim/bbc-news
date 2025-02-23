import { useState, useRef } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import logo from "../images/logo.svg";
import RegisterButton from "./login/RegisterButton";
import SignIn from "./login/SignIn";
import SideNavBar from "./menu/SideNavBar";
import { Link, Outlet } from "react-router-dom";
function Header({ articleTopics }) {
  const [showNavBar, setShowNavBar] = useState(false);
  const searchRef = useRef(null);

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
                  console.log("searchRef.current", searchRef.current);
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
        <Link to='register'>
        <RegisterButton />

        </Link>
          <SignIn />
        </Col>
      </Row>
      <Outlet/>
    </Container>
  );
}

export default Header;
