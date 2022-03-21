import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AddUser from "../../components/AddUser";

function Blog() {
  return (
    <>
    <Container>

    <AddUser />
    </Container>

    </>
  );
}

export default Blog;
