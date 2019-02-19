import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function Header(props) {
  return (
    <Fragment>
      <Navbar bg='light' expand='lg'>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <img alt='' src='assets/logo_small.svg' width='30' height='30' className='d-inline-block align-top' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav className='justify-content-end'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <NavDropdown title='Modelos' id='basic-nav-dropdown'>
              <LinkContainer to='/modelos-women'>
                <NavDropdown.Item>Women</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/modelos-men'>
                <NavDropdown.Item>Men</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/modelos-kids'>
                <NavDropdown.Item>Kids</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to='/about'>
              <Nav.Link>Quem Somos</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/escola'>
              <Nav.Link>Escola</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/agencia'>
              <Nav.Link>Servicos</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/conact'>
              <Nav.Link>Quer ser Modelo</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
