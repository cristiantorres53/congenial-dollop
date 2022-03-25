import React from 'react'
import { Nav,  Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">AppVehiculos</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/data">Datos</Nav.Link>
          <Nav.Link href='/about'>Sobre Nosotros</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  </div>
  )
}

export default NavBar