"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Footer_1 = __importDefault(require("../components/Footer"));
const Additional_1 = __importDefault(require("../components/Additional"));
const Navigation_1 = __importDefault(require("../components/Navigation"));
const Content_1 = __importDefault(require("../components/Content"));
const Homepage = () => {
    return (<div className="Homepage">
      <Navigation_1.default />
      <Content_1.default />
      <Additional_1.default />
      <Footer_1.default />
    </div>);
};
exports.default = Homepage;
