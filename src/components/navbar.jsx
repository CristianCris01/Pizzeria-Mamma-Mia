import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const total = 25000;

  return (
    <div id="navbar-edit">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pizzería Mamma Mía
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                🍕Home
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                🔐Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                🔐Register
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                👤Profile
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart" id="total-button">
                🛒Total: ${total.toLocaleString("es-CL")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
