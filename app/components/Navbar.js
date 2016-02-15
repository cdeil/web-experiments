import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

const style = {
  zIndex: '999',
  borderRadius: '0px',
};

export default () => {
  return (
    <Navbar inverse style={style}>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Gammapy Catalog Browser</a>
        </Navbar.Brand>
      </Navbar.Header>
    <Nav pullRight>
      <NavItem eventKey={3}>About</NavItem>
      <NavItem eventKey={4}>Catalog</NavItem>
      <NavItem eventKey={5}>Image</NavItem>
      <NavItem eventKey={6}>Source</NavItem>
    </Nav>
  </Navbar>
  );
};
