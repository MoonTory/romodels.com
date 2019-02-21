import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';

export function SubmenuDropdown({ children, title }) {
  return (
    <Dropdown as={Submenu}>
      <Dropdown.Toggle as={NavDropdown.Item}> {title} </Dropdown.Toggle>
      <Dropdown.Menu>{children}</Dropdown.Menu>
    </Dropdown>
  );
}

function Submenu({ children }) {
  return <div className='dropdown-submenu'>{children}</div>;
}
