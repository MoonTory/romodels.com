import React, { Fragment } from 'react';
import { Nav, Dropdown } from 'react-bootstrap';

export function MobileDropdown({ children, title }) {
  return (
    <Fragment>
      <Dropdown id='nav-dropdown' className='mobile-dropdown' as={Nav.Item}>
        <Dropdown.Toggle as={Nav.Link}>{title}</Dropdown.Toggle>
        <Dropdown.Menu>{children}</Dropdown.Menu>
      </Dropdown>
    </Fragment>
  );
}
