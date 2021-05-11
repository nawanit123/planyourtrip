"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_datepicker_1 = __importDefault(require("react-datepicker"));
require("react-datepicker/dist/react-datepicker.css");
require("./JourneyEntry.scss");
const JourneyEntry = ({ entry, index, handleChange, handleDate, toggleCheckBox, createEntry, }) => {
    return (<react_bootstrap_1.Form.Row className="JourneyEntry">
      <react_bootstrap_1.Col lg={2} md={3}>
        <react_bootstrap_1.Form.Group className="JourneyEntry__source">
          <react_bootstrap_1.Form.Label>From</react_bootstrap_1.Form.Label>
          <br />
          <react_bootstrap_1.Form.Control as="select" className="Journey__source__name" name="source" value={entry.source} onChange={(e) => handleChange(e, index)} size="lg">
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </react_bootstrap_1.Form.Control>
          <br />
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={2} md={3}>
        <react_bootstrap_1.Form.Group className="JourneyEntry__destination">
          <react_bootstrap_1.Form.Label>To</react_bootstrap_1.Form.Label>
          <br />
          <react_bootstrap_1.Form.Control as="select" className="Journey__destination__name" name="destination" value={entry.destination} onChange={(e) => handleChange(e, index)} size="lg">
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Bangalore</option>
          </react_bootstrap_1.Form.Control>
          <br />
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={2} md={3}>
        <react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Label>Departure</react_bootstrap_1.Form.Label>
          <br />
          <react_datepicker_1.default dateFormat="dd/MM/yyyy" selected={entry.departure} onChange={(date) => handleDate(date, index)}/>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={2} md={4}>
        <react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Label>Travellers</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="number" name="travellers" placeholder="No. of passengers" size="lg" value={entry.travellers} onChange={(e) => handleChange(e, index)}/>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={3} md={4} sm={6}>
        <react_bootstrap_1.Form.Group className="d-flex justify-content-center">
          <react_bootstrap_1.Form.Group className="ml-3">
            <react_bootstrap_1.Form.Label>Hotel</react_bootstrap_1.Form.Label>
            <br />
            <react_bootstrap_1.Form.Check type="checkbox" className="mx-3" name="hotel" checked={entry.hotel} value={entry.hotel} onChange={(e) => toggleCheckBox(e, index)}/>
          </react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Group className="ml-3">
            <react_bootstrap_1.Form.Label>Train</react_bootstrap_1.Form.Label>
            <br />
            <react_bootstrap_1.Form.Check type="checkbox" className="mx-3" name="train" checked={entry.train} value={entry.train} onChange={(e) => toggleCheckBox(e, index)}/>
          </react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Group className="ml-3">
            <react_bootstrap_1.Form.Label>Flight</react_bootstrap_1.Form.Label>
            <br />
            <react_bootstrap_1.Form.Check type="checkbox" className="mx-3" name="flight" checked={entry.flight} value={entry.flight} onChange={(e) => toggleCheckBox(e, index)}/>
          </react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Group className="ml-3">
            <react_bootstrap_1.Form.Label>Cabs</react_bootstrap_1.Form.Label>
            <br />
            <react_bootstrap_1.Form.Check type="checkbox" className="mx-3" name="cab" checked={entry.cab} value={entry.cab} onChange={(e) => toggleCheckBox(e, index)}/>
          </react_bootstrap_1.Form.Group>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={1} md={2} sm={4}>
        <react_bootstrap_1.Form.Group className="ml-3 JourneyEntry__add">
          <react_bootstrap_1.Button variant="outline-primary" size="lg" onClick={() => createEntry()}>
            Add entry
          </react_bootstrap_1.Button>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
    </react_bootstrap_1.Form.Row>);
};
exports.default = JourneyEntry;
