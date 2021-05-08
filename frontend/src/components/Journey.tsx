import React from 'react';
import { Form, Jumbotron } from 'react-bootstrap';
import './Journey.scss';

interface Props {
  children?: React.ReactNode;
}

const Journey: React.FC<Props> = (props) => {
  return (
    <Jumbotron className="Journey">
      <h1>Journey Planning</h1>
      <Form>
        {props.children}
        <button type="submit">Submit</button>
      </Form>
    </Jumbotron>
  );
};

export default Journey;
