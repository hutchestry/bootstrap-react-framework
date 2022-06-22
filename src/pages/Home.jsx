import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SearchBox from "../components/SearchBox";


const Home = (props) => {


  return (
    <section className="bg-light">
      <Container className=" py-5">
        <Row className="justify-content-center pb-5" style={{marginBottom: 100}}>
          <Col>
            <h1 className="fs-1 text-secondary lh-1 mb-3 text-center">Search Jobs <span className="fs-6">(the old typy way)</span></h1>
            
            <SearchBox />
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
