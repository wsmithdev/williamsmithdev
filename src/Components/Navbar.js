import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Styles/NavbarStyle.css";

function NavBar({ goToLandingPage, goToProjects, goToAbout, goToContact }) {
  return (
    <Navbar className='navbar-main' bg="dark" variant="dark" expand="lg" fixed='top'>
      <Container>
      <Navbar.Brand><span className='span-green'>W</span>illiam <span className='span-green'>S</span>mith</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link onClick={goToLandingPage}>Home</Nav.Link>
            <Nav.Link onClick={goToProjects}>Projects</Nav.Link>
            <Nav.Link onClick={goToAbout}>About</Nav.Link>
            <Nav.Link onClick={goToContact}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;