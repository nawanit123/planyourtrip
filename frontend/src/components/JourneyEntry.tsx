import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './JourneyEntry.scss';

interface Props {
  entry: any;
  index: number;
  handleChange: Function;
  handleDate: Function;
  toggleCheckBox: Function;
  createEntry: Function;
}

const JourneyEntry: React.FC<Props> = ({
  entry,
  index,
  handleChange,
  handleDate,
  toggleCheckBox,
  createEntry,
}) => {
  return (
    <Form.Row className="JourneyEntry">
      <Form.Group as={Col} className="JourneyEntry__source">
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
      <Form.Group as={Col} className="JourneyEntry__destination">
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
      <Form.Group className="ml-3">
        <Form.Label>Travellers</Form.Label>
        <Form.Control
          type="number"
          name="travellers"
          placeholder="No. of passengers"
          size="lg"
          value={entry.travellers}
          onChange={(e) => handleChange(e, index)}
        />
      </Form.Group>

      <Form.Group className="ml-5">
        <Form.Label>Hotel</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="hotel"
          checked={entry.hotel}
          value={entry.hotel}
          onChange={(e) => toggleCheckBox(e, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5">
        <Form.Label>Train</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="train"
          checked={entry.train}
          value={entry.train}
          onChange={(e) => toggleCheckBox(e, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5">
        <Form.Label>Flight</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="flight"
          checked={entry.flight}
          value={entry.flight}
          onChange={(e) => toggleCheckBox(e, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5">
        <Form.Label>Cabs</Form.Label>
        <br />
        <Form.Check
          type="checkbox"
          name="cab"
          checked={entry.cab}
          value={entry.cab}
          onChange={(e) => toggleCheckBox(e, index)}
        />
      </Form.Group>
      <Form.Group className="ml-5 JourneyEntry__add">
        <Button
          variant="outline-primary"
          size="lg"
          onClick={() => createEntry()}
        >
          Add entry
        </Button>
      </Form.Group>
    </Form.Row>
  );
};

export default JourneyEntry;
