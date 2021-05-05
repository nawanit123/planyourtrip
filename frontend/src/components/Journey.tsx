import React from 'react';
import { Button, Col, Form, Jumbotron } from 'react-bootstrap';
import './Journey.scss';

const Journey = () => {
  return (
    <Jumbotron className="Journey">
      <h1>Journey Planning</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formSource">
            <Form.Label>From</Form.Label>
            <Form.Control placeholder="Mumbai" />
          </Form.Group>
          <Form.Group as={Col} controlId="formDestination">
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="Bangalore" />
          </Form.Group>
          <Form.Group as={Col} controlId="requirements">
            <Form.Check
              inline
              label="Hotel"
              type="checkbox"
              id="requirements"
            />
            <Form.Check inline label="Cabs" type="checkbox" id="requirements" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formSource">
            <Form.Label>From</Form.Label>
            <Form.Control placeholder="Mumbai" />
          </Form.Group>
          <Form.Group as={Col} controlId="formSource">
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="Bangalore" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formSource">
            <Form.Label>From</Form.Label>
            <Form.Control placeholder="Mumbai" />
          </Form.Group>
          <Form.Group as={Col} controlId="formSource">
            <Form.Label>To</Form.Label>
            <Form.Control placeholder="Bangalore" />
          </Form.Group>
        </Form.Row>
      </Form>
    </Jumbotron>
  );
};

export default Journey;
