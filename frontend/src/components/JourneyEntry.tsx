import React from 'react';
import { Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  entry: any;
  index: number;
  handleChange: Function;
  handleDate: Function;
}

const JourneyEntry: React.FC<Props> = ({
  entry,
  index,
  handleChange,
  handleDate,
}) => {
  return (
    <Form.Row>
      <Form.Group as={Col} className="Journey__source">
        <Form.Label>From</Form.Label>
        <br />
        <Form.Control
          as="select"
          className="Journey__source__name"
          name="source"
          value={entry.source}
          onChange={(e) => handleChange(e, index)}
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
          value={entry.destination}
          onChange={(e) => handleChange(e, index)}
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
          selected={entry.departure}
          onChange={(date: Date) => handleDate(date, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5">
        <Form.Label>Hotel</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="hotel"
          checked={entry.hotel}
          onChange={(e) => handleChange(e, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5">
        <Form.Label>Train</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="train"
          checked={entry.train}
          onChange={(e) => handleChange(e, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5">
        <Form.Label>Cabs</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="cab"
          checked={entry.cab}
          onChange={(e) => handleChange(e, index)}
        />
      </Form.Group>
    </Form.Row>
  );
};

export default JourneyEntry;
