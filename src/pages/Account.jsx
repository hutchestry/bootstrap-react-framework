import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import AddUser from "../components/AddUser";

function Account() {
  return (
    <section className="bg-light">
      <Container>
        <AddUser />
      </Container>
    </section>
  );
}

export default Account;
