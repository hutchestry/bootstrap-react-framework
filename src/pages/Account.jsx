import React from "react";
import { Container } from "react-bootstrap";
// import { Outlet } from "react-router-dom";
// import AddUser from "../components/AddUser";
import { AccountDetails } from "../components/AccountDetails";

function Account() {
  return (
    <section className="bg-light">
      <Container>
        {/* <AddUser /> */}
        <AccountDetails />
      </Container>
    </section>
  );
}

export default Account;
