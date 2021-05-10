import React from 'react';
import { Col, Form } from 'react-bootstrap';

interface PropTypes {
  user: {
    name: string;
    address: string;
    contactNumber: string;
    email: string;
  };
  handleUser: Function;
}

const UserDetails: React.FC<PropTypes> = ({ user, handleUser }) => {
  return (
    <Form.Row className="mb-5">
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            size="lg"
            name="name"
            value={user.name}
            onChange={(e) => handleUser(e)}
            required
          />
        </Form.Group>
      </Col>
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            size="lg"
            required
            value={user.address}
            onChange={(e) => handleUser(e)}
          />
        </Form.Group>
      </Col>
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            size="lg"
            value={user.contactNumber}
            onChange={(e) => handleUser(e)}
            required
          />
        </Form.Group>
      </Col>
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            size="lg"
            value={user.email}
            onChange={(e) => handleUser(e)}
            required
          />
        </Form.Group>
      </Col>
    </Form.Row>
  );
};

export default UserDetails;
