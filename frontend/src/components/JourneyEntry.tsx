import React, { useState } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface checkboxes {
  hotel: boolean;
  train: boolean;
  cab: boolean;
}

const JourneyEntry: React.FC = () => {
  const [state, setState] = useState<{ source: string; destination: string }>({
    source: 'Mumbai',
    destination: 'Bangalore',
  });

  const [isChecked, setIsChecked] = useState<checkboxes>({
    hotel: false,
    train: false,
    cab: false,
  });
  const [departure, setDeparture] = useState(new Date());
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const toggleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked({ ...isChecked, [e.target.name]: e.target.checked });
  };

  const submitHandler = () => {};

  return (
    <Form className="JourneyEntry" onSubmit={submitHandler}>
      <Form.Row>
        <Form.Group as={Col} className="Journey__source">
          <Form.Label>From</Form.Label>
          <br />
          <Form.Control
            as="select"
            className="Journey__source__name"
            name="source"
            value={state.source}
            onChange={handleChange}
            size="lg"
          >
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </Form.Control>
          <br />
        </Form.Group>
        <Form.Group as={Col} className="Journey__destination">
          <Form.Label>To</Form.Label>
          <br />
          <Form.Control
            as="select"
            className="Journey__destination__name"
            name="destination"
            value={state.destination}
            onChange={handleChange}
            size="lg"
          >
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </Form.Control>
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>Departure</Form.Label>
          <br />
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={departure}
            onChange={(date: Date) => setDeparture(date)}
          />
        </Form.Group>
        <Form.Group className="ml-5">
          <Form.Label>Hotel</Form.Label>
          <br />
          <Form.Check
            type="checkbox"
            name="hotel"
            checked={isChecked.hotel}
            onChange={toggleCheckbox}
          />
        </Form.Group>
        <Form.Group className="ml-5">
          <Form.Label>Train</Form.Label>
          <br />
          <Form.Check
            type="checkbox"
            name="train"
            checked={isChecked.train}
            onChange={toggleCheckbox}
          />
        </Form.Group>
        <Form.Group className="ml-5">
          <Form.Label>Cabs</Form.Label>
          <br />
          <Form.Check
            type="checkbox"
            name="cab"
            checked={isChecked.cab}
            onChange={toggleCheckbox}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="mx-3 my-5">
          Done
        </Button>
      </Form.Row>
    </Form>
  );
};

export default JourneyEntry;
