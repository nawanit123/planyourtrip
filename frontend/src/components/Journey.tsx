import React, { useState } from 'react';
import { Button, Form, Jumbotron } from 'react-bootstrap';
import './Journey.scss';
import JourneyEntry from '../components/JourneyEntry';
import UserDetails from './UserDetails';
import { v4 as uuidv4 } from 'uuid';

interface Props {
  children?: React.ReactNode;
}

interface JourneyEntryType {
  source: string | null;
  destination: string | null;
  departure: Date | null;
  travellers: number | 1;
  hotel: boolean | null;
  train: boolean | null;
  flight: boolean | null;
  cab: boolean | null;
}

interface UserInformationType {
  name: string;
  address: string;
  contactNumber: string;
  email: string;
}

const submitHandler = () => {};

const Journey: React.FC<Props> = (props) => {
  const [userDetails, setUserDetails] = useState<UserInformationType>({
    name: '',
    address: '',
    contactNumber: '',
    email: '',
  });
  const [entry1, setEntry1] = useState<JourneyEntryType[]>([
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

  const handleChange = (e: any, i: number) => {
    setEntry1((prevState: any) => {
      prevState[i] = {
        ...prevState[i],
        [e.target.name]: e.target.value,
      };
      return [...prevState];
    });
  };
  const toggleCheckBox = (e: any, i: number) => {
    let value: any = entry1[i];
    setEntry1((prevState: any) => {
      prevState[i] = {
        ...prevState[i],
        [e.target.name]: !value[e.target.name],
      };
      return [...prevState];
    });
  };

  const handleDate = (date: Date, i: number) => {
    setEntry1((prevState: any) => {
      prevState[i] = {
        ...prevState[i],
        departure: date,
      };
      return [...prevState];
    });
  };

  const handleUser = (e: any) => {
    setUserDetails((prevState: any) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <Jumbotron className="Journey">
      <h1>Journey Planning</h1>
      <br />

      <Form className="Journey__form" onSubmit={submitHandler}>
        <UserDetails user={{ ...userDetails }} handleUser={handleUser} />
        <br />
        {entry1.map((entry, i) => (
          <JourneyEntry
            key={uuidv4()}
            entry={entry}
            index={i}
            handleChange={handleChange}
            handleDate={handleDate}
            toggleCheckBox={toggleCheckBox}
            createEntry={createEntry}
          />
        ))}

        <div className="Journey__submit">
          <Button size="lg" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Jumbotron>
  );
};

export default Journey;
