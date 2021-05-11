"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./VerticalNav.scss");
const VerticalNav = () => {
    return (<react_bootstrap_1.Nav className="VerticalNav">
      <react_bootstrap_1.Nav.Link href="#home">
        <i className="fab fa-tripadvisor"></i>
        <br />
        Journey Plan
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#flights">
        <i className="fas fa-plane"></i>
        <br /> Flights
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#hotels">
        <i className="fas fa-hotel"></i>
        <br />
        Hotels
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#apartments">
        <i className="fas fa-home"></i>
        <br />
        Apartments
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#holidays">
        <i className="fas fa-parachute-box"></i>
        <br />
        Holidays
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#train">
        <i className="fas fa-train"></i>
        <br />
        Train Tickets
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#bus">
        <i className="fas fa-bus"></i>
        <br />
        Bus Tickets
      </react_bootstrap_1.Nav.Link>
      <react_bootstrap_1.Nav.Link href="#visas">
        <i className="fab fa-cc-visa"></i>
        <br />
        Visa Applications
      </react_bootstrap_1.Nav.Link>
    </react_bootstrap_1.Nav>);
};
exports.default = VerticalNav;
