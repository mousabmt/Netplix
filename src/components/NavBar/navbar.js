import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.scss";
import Favorite from "../FavList/favlist";
import { Link } from "react-router-dom";
export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navBar">
        <Container>
          <Navbar.Brand path="/">NetPlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/" className="nav-link">
                Trending
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/favorite" className="nav-link">
                Favorite
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
