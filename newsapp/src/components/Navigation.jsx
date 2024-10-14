import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Navigation = ({ setCategory }) => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JDO News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCategory("technology")}>
              Technology
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("business")}>
              Business
            </Nav.Link>
            <Nav.Link onClick={() => setCategory("health")}>Health</Nav.Link>
            <Nav.Link onClick={() => setCategory("science")}>Science</Nav.Link>
            <Nav.Link onClick={() => setCategory("sports")}>Sports</Nav.Link>
            <Nav.Link onClick={() => setCategory("entertainment")}>
              Entertainment
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
