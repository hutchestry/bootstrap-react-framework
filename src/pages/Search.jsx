// Search.js
import React from "react";
import { Container} from "react-bootstrap";
import SearchBox from "../components/SearchBox";
import JobsList from "../components/JobsList";

const Search = (props) => {

  return (
    <>
    <section className="bg-light">
      <Container className=" py-5">
        <SearchBox />
        <JobsList />
      </Container>
    </section>
    </>
  );
};

export default Search;