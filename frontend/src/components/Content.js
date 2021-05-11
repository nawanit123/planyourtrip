"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const VerticalNav_1 = __importDefault(require("./VerticalNav"));
require("./Content.scss");
const Journey_1 = __importDefault(require("./Journey"));
const Content = () => {
    return (<div className="Content">
      <VerticalNav_1.default />
      <Journey_1.default />
    </div>);
};
exports.default = Content;
