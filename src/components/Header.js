import { useState, useRef } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import logo from "../images/logo.svg";
import Register from "./login/Register";
import SignIn from "./login/SignIn";
import SideNavBar from "./menu/SideNavBar";
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
                  console.log("searchRef.current",searchRef.current)
                  return true;
                }}
              ></i>
            </Col>
          </Row>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Image src={logo} style={{ width: "80px", height: "40px" }}></Image>
        </Col>
        <Col className="d-flex justify-content-end">
          <Register />
          <SignIn />
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
