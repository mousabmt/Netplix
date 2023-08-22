import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.scss'
export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='navBar'>
        <Container>
          <Navbar.Brand path="/" >Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link path="/">Home</Nav.Link>
            <Nav.Link path="/fav">Trending</Nav.Link>
            <Nav.Link path="/trending">Favorite</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      </>
  )}