"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./Navigation.scss");
const Navigation = () => {
    return (<react_bootstrap_1.Navbar bg="dark" variant="dark" expand="lg" className="Navigation">
      <react_bootstrap_1.Container>
        <react_bootstrap_1.Navbar.Brand href="#home" className="Navigation__Brand">
          planYourtrip
        </react_bootstrap_1.Navbar.Brand>
        <react_bootstrap_1.Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <react_bootstrap_1.Navbar.Collapse id="basic-navbar-nav"></react_bootstrap_1.Navbar.Collapse>
      </react_bootstrap_1.Container>
    </react_bootstrap_1.Navbar>);
};
exports.default = Navigation;
