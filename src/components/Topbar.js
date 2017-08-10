import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LanguageBar from './LanguageBar';
import '../styles/Topbar.css';

const Topbar = () => (
  <div className="topbar">
    <Grid>
      <Row className="show-grid">
        <Col xs={8} md={6}>
          <LanguageBar />
        </Col>
        <Col xs={4} md={6} className="text-right">
          <Link to="/logout">Logout</Link>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Topbar;
