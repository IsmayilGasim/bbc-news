import { useState, useEffect, forwardRef } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import SearchForm from "./SearchForm";

import "../../styles/NavbarCloseBtn.css";
import { NavDropdown } from "react-bootstrap";

const SideNavBar = forwardRef( (
  { articleTopics, showNavBar, closeBtnClickHandler, openSideNavBarHandler },
  searchRef
) =>{
  console.log("forwardRef searchRef",searchRef)
  return (
    <>
      <Navbar expand="false">
        <Container fluid>
          <Navbar.Toggle
            className="border-0 m-0 p-0"
            onClick={openSideNavBarHandler}
          />

          <Navbar.Offcanvas show={showNavBar}>
            <Offcanvas.Header
              closeButton
              onClick={closeBtnClickHandler}
            ></Offcanvas.Header>
            <SearchForm ref={searchRef} />

            <Nav className="flex-column bg-light p-3">
              {articleTopics.length > 0 ? (
                articleTopics.map((topic) => (
                  <Nav.Link href={`#${topic}`} key={topic}>
                    {topic.charAt(0).toUpperCase() + topic.slice(1)}
                  </Nav.Link>
                ))
              ) : (
                <span>No topics found.</span>
              )}
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* })} */}
    </>
  );
});

export default SideNavBar;
