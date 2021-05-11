"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
require("./Journey.scss");
const JourneyEntry_1 = __importDefault(require("../components/JourneyEntry"));
const UserDetails_1 = __importDefault(require("./UserDetails"));
const uuid_1 = require("uuid");
const submitHandler = () => { };
const Journey = (props) => {
    const [userDetails, setUserDetails] = react_1.useState({
        name: '',
        address: '',
        contactNumber: '',
        email: '',
    });
    const [entry1, setEntry1] = react_1.useState([
        {
            source: 'Mumbai',
            destination: 'Bangalore',
            departure: new Date(),
            travellers: 1,
            hotel: false,
            train: false,
            flight: false,
            cab: false,
        },
    ]);
    const createEntry = () => {
        setEntry1([
            ...entry1,
            {
                source: '',
                destination: '',
                departure: new Date(),
                travellers: 1,
                hotel: false,
                train: false,
                flight: false,
                cab: false,
            },
        ]);
    };
    const handleChange = (e, i) => {
        setEntry1((prevState) => {
            prevState[i] = Object.assign(Object.assign({}, prevState[i]), { [e.target.name]: e.target.value });
            return [...prevState];
        });
    };
    const toggleCheckBox = (e, i) => {
        let value = entry1[i];
        setEntry1((prevState) => {
            prevState[i] = Object.assign(Object.assign({}, prevState[i]), { [e.target.name]: !value[e.target.name] });
            return [...prevState];
        });
    };
    const handleDate = (date, i) => {
        setEntry1((prevState) => {
            prevState[i] = Object.assign(Object.assign({}, prevState[i]), { departure: date });
            return [...prevState];
        });
    };
    const handleUser = (e) => {
        setUserDetails((prevState) => {
            return Object.assign(Object.assign({}, prevState), { [e.target.name]: e.target.value });
        });
    };
    return (<react_bootstrap_1.Jumbotron className="Journey">
      <h1>Journey Planning</h1>
      <br />

      <react_bootstrap_1.Form className="Journey__form" onSubmit={submitHandler}>
        <UserDetails_1.default user={Object.assign({}, userDetails)} handleUser={handleUser}/>
        <br />
        {entry1.map((entry, i) => (<JourneyEntry_1.default key={uuid_1.v4()} entry={entry} index={i} handleChange={handleChange} handleDate={handleDate} toggleCheckBox={toggleCheckBox} createEntry={createEntry}/>))}

        <div className="Journey__submit">
          <react_bootstrap_1.Button size="lg" type="submit">
            Submit
          </react_bootstrap_1.Button>
        </div>
      </react_bootstrap_1.Form>
    </react_bootstrap_1.Jumbotron>);
};
exports.default = Journey;
