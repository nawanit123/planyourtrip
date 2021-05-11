"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const UserDetails = ({ user, handleUser }) => {
    return (<react_bootstrap_1.Form.Row className="mb-5">
      <react_bootstrap_1.Col lg={3} xs={12}>
        <react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Label>Name</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="text" placeholder="Name" size="lg" name="name" value={user.name} onChange={(e) => handleUser(e)} required/>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={3} xs={12}>
        <react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Label>Address</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="text" name="address" placeholder="Address" size="lg" required value={user.address} onChange={(e) => handleUser(e)}/>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={3} xs={12}>
        <react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Label>Mobile Number</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="text" name="contactNumber" placeholder="Contact Number" size="lg" value={user.contactNumber} onChange={(e) => handleUser(e)} required/>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
      <react_bootstrap_1.Col lg={3} xs={12}>
        <react_bootstrap_1.Form.Group>
          <react_bootstrap_1.Form.Label>Email</react_bootstrap_1.Form.Label>
          <react_bootstrap_1.Form.Control type="email" name="email" placeholder="Email" size="lg" value={user.email} onChange={(e) => handleUser(e)} required/>
        </react_bootstrap_1.Form.Group>
      </react_bootstrap_1.Col>
    </react_bootstrap_1.Form.Row>);
};
exports.default = UserDetails;
