import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Navigation.scss';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="Navigation">
      <Container>
        <Navbar.Brand href="#home" className="Navigation__Brand">
          planYourtrip
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
