"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.scss");
const Homepage_1 = __importDefault(require("./screens/Homepage"));
function App() {
    return (<div className="App">
      <Homepage_1.default />
    </div>);
}
exports.default = App;
