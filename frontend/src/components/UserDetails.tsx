import React from 'react';
import { Col, Form } from 'react-bootstrap';

const UserDetails = () => {
  return (
    <Form.Row className="mb-5">
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" size="lg" required />
        </Form.Group>
      </Col>
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" size="lg" required />
        </Form.Group>
      </Col>
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contact Number"
            size="lg"
            required
          />
        </Form.Group>
      </Col>
      <Col lg={3} xs={12}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" size="lg" required />
        </Form.Group>
      </Col>
    </Form.Row>
  );
};

export default UserDetails;
