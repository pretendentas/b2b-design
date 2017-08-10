import React from 'react';
import { Carousel } from 'react-bootstrap';


const imageProp = {
  alt: '945x470',
  height: 470,
  width: 945,
  url: 'http://placehold.it/945x470?text=AD',
};
const Slider = () => (
  <Carousel>
    <Carousel.Item>
      <img
        width={imageProp.width}
        height={imageProp.height}
        alt={imageProp.alt}
        src={imageProp.url}
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        width={imageProp.width}
        height={imageProp.height}
        alt={imageProp.alt}
        src={imageProp.url}
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        width={imageProp.width}
        height={imageProp.height}
        alt={imageProp.alt}
        src={imageProp.url}
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Slider;
