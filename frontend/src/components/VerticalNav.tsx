import React from 'react';
import { Nav } from 'react-bootstrap';
import './VerticalNav.scss';

const VerticalNav: React.FC = () => {
  return (
    <Nav className="VerticalNav">
      <Nav.Link href="#home">
        <i className="fab fa-tripadvisor"></i>
        <br />
        Journey Plan
      </Nav.Link>
      <Nav.Link href="#flights">
        <i className="fas fa-plane"></i>
        <br /> Flights
      </Nav.Link>
      <Nav.Link href="#hotels">
        <i className="fas fa-hotel"></i>
        <br />
        Hotels
      </Nav.Link>
      <Nav.Link href="#apartments">
        <i className="fas fa-home"></i>
        <br />
        Apartments
      </Nav.Link>
      <Nav.Link href="#holidays">
        <i className="fas fa-parachute-box"></i>
        <br />
        Holidays
      </Nav.Link>
      <Nav.Link href="#train">
        <i className="fas fa-train"></i>
        <br />
        Train Tickets
      </Nav.Link>
      <Nav.Link href="#bus">
        <i className="fas fa-bus"></i>
        <br />
        Bus Tickets
      </Nav.Link>
      <Nav.Link href="#visas">
        <i className="fab fa-cc-visa"></i>
        <br />
        Visa Applications
      </Nav.Link>
    </Nav>
  );
};

export default VerticalNav;
