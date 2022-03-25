import React from "react";
import { Navbar, Container } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default HomePage;
