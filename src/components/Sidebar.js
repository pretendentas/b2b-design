import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

// import config from '../libs/apiLib';

const Sidebar = () => (
  // async componentDidMount() {

  // }
  <Nav bsStyle="pills" stacked activeKey={1}>
    <NavItem eventKey={1}>Laisvai pastatoma buitinė technika</NavItem>
    <NavItem eventKey={2}>Įmontuojama buitinė technika</NavItem>
    <NavItem eventKey={3}>Smulkūs prietaisai</NavItem>
    <NavItem eventKey={4}>Santechnika</NavItem>
    <NavItem eventKey={5}>Buitinės technikos priedai</NavItem>
    <NavItem eventKey={6}>Namų jaukumui</NavItem>
    <NavItem eventKey={7}>Išpardavimas</NavItem>
  </Nav>
);

export default Sidebar;
