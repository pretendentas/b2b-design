import React from 'react';

import { Grid, Row, Col, Form, FormGroup, FormControl, Button, Dropdown, Glyphicon, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/p-logo.png';

import '../styles/Navtop.css';

const NavTop = () => (
  <Grid>
    <Row className="nav-top">
      <Col md={3} className="logo">
        <Link to="/">
          <img src={Logo} width="90" alt="Pretendentas.lt" />
        </Link>
      </Col>
      <Col md={6}>
        <Form inline>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Form>
      </Col>
      <Col md={3}>
        <Dropdown id="dropdown-custom-1" className="minicart">
          <Dropdown.Toggle>
            <Glyphicon glyph="shopping-cart" />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>Active Item</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </Row>
  </Grid>
);

export default NavTop;
