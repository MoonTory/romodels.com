import React, { Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { SubmenuDropdown } from './SubmenuDropdown';
import { MobileDropdown } from './MobileDropdown';

import './styles/index.css';

export default function Header() {
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
            <NavDropdown style={{ marginRight: '0' }} title='Modelos' id='nav-dropdown'>
              {/* Custom Dropdown with submenu */}
              <SubmenuDropdown title='Feminino'>
                <LinkContainer to='/modelos-fashion'>
                  <NavDropdown.Item>Fashion</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/modelos-curve'>
                  <NavDropdown.Item>Curve</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/modelos-plus-size'>
                  <NavDropdown.Item>Plus Size</NavDropdown.Item>
                </LinkContainer>
              </SubmenuDropdown>
              {/* MOBILE DROPDOWN BECAUSE SUBMENU DON'T WORK WELL ON MOBILE */}
              <MobileDropdown title='Feminino'>
                <LinkContainer to='/modelos-fashion'>
                  <NavDropdown.Item>Fashion</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/modelos-curve'>
                  <NavDropdown.Item>Curve</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/modelos-plus-size'>
                  <NavDropdown.Item>Plus Size</NavDropdown.Item>
                </LinkContainer>
              </MobileDropdown>
              {/* Custom Dropdown with submenu */}
              <LinkContainer to='/modelos-men'>
                <NavDropdown.Item>Men</NavDropdown.Item>
              </LinkContainer>
              {/* Custom Dropdown with submenu */}
              <SubmenuDropdown title='Infantil'>
                <LinkContainer to='/modelos-kids-feminino'>
                  <NavDropdown.Item>Feminino</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/modelos-kids-masculino'>
                  <NavDropdown.Item>Masculino</NavDropdown.Item>
                </LinkContainer>
              </SubmenuDropdown>
              {/* Custom Dropdown with submenu */}
              <MobileDropdown title='Infantil'>
                <LinkContainer to='/modelos-kids-feminino'>
                  <NavDropdown.Item>Feminino</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/modelos-kids-masculino'>
                  <NavDropdown.Item>Masculino</NavDropdown.Item>
                </LinkContainer>
              </MobileDropdown>
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
