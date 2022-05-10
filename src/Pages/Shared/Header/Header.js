import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../../src/images/logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <>
      <Navbar sticky='top' collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Nav.Link href="home#banner" className='text-white fw-bold fs-3'>Laptop Source</Nav.Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              

            </Nav>
            <Nav>
              {
                user && <>
                  <Nav.Link as={Link} to="addservice">Add New Item</Nav.Link>
                  <Nav.Link as={Link} to="manage">Manage Items</Nav.Link>
                </>
              }
              {
                user ? <button onClick={handleSignOut} className='btn btn-primary'>Sign Out</button> : <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;