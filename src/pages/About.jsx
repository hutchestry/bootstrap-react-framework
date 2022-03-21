import React from "react";
import {Container, Carousel} from "react-bootstrap";
import slide1 from "../assets/images/slide-01.jpg";
import slide2 from "../assets/images/slide-02.jpg";
import slide3 from "../assets/images/slide-03.jpg";

function About() {
  return (
    <section className="bg-light">
      <Container className="py-3">
        <Carousel style={{ width:'800px', margin:'auto' }}>
          <Carousel.Item className="bg-dark">
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
              maxheight="400"
              maxwidth="800"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-dark">
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
              maxheight="400"
              maxwidth="800"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-dark">
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
              maxheight="400"
              maxwidth="800"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default About;
