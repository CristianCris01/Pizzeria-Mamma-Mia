import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { UserContext } from "../context/authContext";
import Button from "react-bootstrap/Button";

function NavBar() {
  const {token, logout} = useContext(UserContext);
  const { total } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
              <Button variant="outline-light" as={Link} to="/">
                    🍕 Home
              </Button>
              {token ? (
                <>
                  
                  <Nav.Link as ={Link} to="/profile">
                   🔐 Profile
                  </Nav.Link>
                  <Button variant="outline-light" onClick={handleLogout}>
                   🚪 Logout
                  </Button>

                </>

              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                   🚪 Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                   📃Register
                  </Nav.Link>
                </>
              )
            }
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
