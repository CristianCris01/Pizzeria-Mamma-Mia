import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar({ onRegisterClick, onLoginClick }) {
  const [total, setTotal] = useState(25000);
  const [token, setToken] = useState(false);

  return (
    <div id="navbar-edit">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">Pizzería Mamma Mía</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><button>🍕Home</button></Nav.Link>
              <Nav.Link>
                <button onClick={onLoginClick}>
                  {token ? '🔐Logout' : '🔐Login'}
                </button>
              </Nav.Link>
              <Nav.Link>
                <button onClick={onRegisterClick}>
                  {token ? '👤Profile' : '🔐Register'}
                </button>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link><button id="total-button">🛒Total: ${total.toLocaleString()}</button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;



