import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import '../styles/Navigation.css';

const Navigation = () => (
  <div>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={1} title="Prekių katalogas" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>Laisvai pastatoma buitinė technika</MenuItem>
            <MenuItem eventKey={1.2}>Įmontuojama buitinė technika</MenuItem>
            <MenuItem eventKey={1.3}>Smulkūs prietaisai</MenuItem>
            <MenuItem eventKey={1.4}>Santechnika</MenuItem>
            <MenuItem eventKey={1.5}>Buitinės technikos priedai</MenuItem>
            <MenuItem eventKey={1.6}>Namų jaukumui</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.7}>Išpardavimas</MenuItem>
          </NavDropdown>
          <NavItem eventKey={2} href="#">Mano duomenys</NavItem>
          <NavItem eventKey={3} href="#">Mano pirkimų informacija</NavItem>
          <NavItem eventKey={4} href="#">Klientams</NavItem>
          <NavItem eventKey={5} href="#">Servisas</NavItem>
          <NavItem eventKey={6} href="#">Pristatymo sąlygos</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
