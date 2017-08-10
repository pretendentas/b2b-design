import React from 'react';
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Slider from './Slider';
import '../styles/Home.css';


const thumbnail = {
  src: 'http://placehold.it/242x200?text=Product',
  alt: '242x200',
};

const Home = () => (
  <div className="Home">
    <Grid>
      <Row>
        <Col md={3}>
          <Sidebar />
        </Col>
        <Col md={9}>
          <Slider />
        </Col>
      </Row>

      <Row className="lander">
        <Col xs={6} md={3}>
          <Thumbnail src={thumbnail.src} alt={thumbnail.alt}>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src={thumbnail.src} alt={thumbnail.alt}>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src={thumbnail.src} alt={thumbnail.alt}>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail src={thumbnail.src} alt={thumbnail.alt}>
            <h3>Thumbnail label</h3>
            <p>Description</p>
            <p>
              <Button bsStyle="primary">Button</Button>&nbsp;
              <Button bsStyle="default">Button</Button>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Home;
