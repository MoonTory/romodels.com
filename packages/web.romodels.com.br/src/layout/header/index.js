import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header(props) {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <LinkContainer to='/' ><Navbar.Brand><img
        alt=""
        src="assets/logo_small.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      /></Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to='/' ><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to='/about' ><Nav.Link>About</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
