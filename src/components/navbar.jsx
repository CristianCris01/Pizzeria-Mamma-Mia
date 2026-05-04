import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar({ onHomeClick, onRegisterClick, onLoginClick, onCartClick }) {
  const total = 25000;
  const token = false;

  return (
    <div id="navbar-edit">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <button onClick={onHomeClick}>🍕Home</button>
              </Nav.Link>
              <Nav.Link>
                <button onClick={onLoginClick}>
                  {token ? "🔐Logout" : "🔐Login"}
                </button>
              </Nav.Link>
              <Nav.Link>
                <button onClick={onRegisterClick}>
                  {token ? "👤Profile" : "🔐Register"}
                </button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <button id="total-button" onClick={onCartClick}>
                  🛒Total: ${total.toLocaleString("es-CL")}
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
