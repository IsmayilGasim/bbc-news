import { Container, Navbar, Nav } from "react-bootstrap";

function TopNavBar({ articleTopics }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavBar;
